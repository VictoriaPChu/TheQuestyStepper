import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Vibration,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { CharacterContext } from "../CharacterContext";
import { encounters } from "../encounters";
import { locations } from "../locations"; // Import locations
import { assetsMap } from "../assetsMap";
import { SpecialCharacters } from "../SpecialCharacters";

export default function RandomEncountersScreen({ navigation }) {
  const {
    selectedCharacter,
    hp,
    setHp,
    inventory,
    addItemToInventory,
    removeItemFromInventory,
    bestiary,
    updateBestiary,
    currentLocation,
    setCurrentLocation,
    knownLocations,
    setKnownLocations,
    encounterCount,
    setEncounterCount,
    knownCharacters,
    addKnownCharacter,
    removeKnownCharacter,
  } = useContext(CharacterContext);

  const [currentEncounter, setCurrentEncounter] = useState(null);
  const [combat, setCombat] = useState(false);
  const [specialCharacterEncounter, setSpecialCharacterEncounter] =
    useState(false);
  const [enemyHp, setEnemyHp] = useState(0);
  const [combatLog, setCombatLog] = useState([]);
  const [rewardDialogue, setRewardDialogue] = useState(null);

  useEffect(() => {
    let encounter;
    const newLocations = locations.filter(
      (loc) => !knownLocations.includes(loc.name)
    );
    if (
      (currentLocation === null || encounterCount >= 3) &&
      newLocations.length > 0
    ) {
      encounter = newLocations[Math.floor(Math.random() * newLocations.length)];
      setEncounterCount(0); // Reset the count for location encounters

      // Add the location to known locations if not already known
      if (!knownLocations.includes(encounter.name)) {
        setKnownLocations((prev) => [...prev, encounter.name]);
      }

      // Set the current location to the new location
      setCurrentLocation(encounter.name);
    } else {
      // Encounter an enemy or special character based on the current location
      const locationData = locations.find(
        (loc) => loc.name === currentLocation
      );
      const possibleEncounters = [
        ...locationData.enemies,
        ...locationData.special_characters,
      ];
      const randomEncounter =
        possibleEncounters[
          Math.floor(Math.random() * possibleEncounters.length)
        ];

      if (
        locationData &&
        locationData.enemies.length > 0 &&
        isEnemy(randomEncounter)
      ) {
        const enemyName =
          locationData.enemies[
            Math.floor(Math.random() * locationData.enemies.length)
          ];
        encounter = encounters.find((enc) => enc.name === enemyName);
        setEnemyHp(encounter.hp);
        setCombat(true);
        setEncounterCount((prev) => prev + 1);
      } else if (
        locationData &&
        locationData.special_characters.length > 0 &&
        isSpecialCharacter(randomEncounter)
      ) {
        encounter = SpecialCharacters.find(
          (enc) => enc.name === randomEncounter
        );
        setSpecialCharacterEncounter(true);
        setRewardDialogue(null); // Reset reward dialogue
        setEncounterCount((prev) => prev + 1);

        // Check if the special character is known
        if (!knownCharacters.includes(randomEncounter)) {
          addKnownCharacter(randomEncounter);
        }
      } else {
        console.log("no special  char or enemies");
        // Fallback in case location has no enemies or special characters
        encounter = encounters[Math.floor(Math.random() * encounters.length)];
        setEnemyHp(encounter.hp);
        setCombat(true);
        setEncounterCount((prev) => prev + 1);
      }
    }

    setCurrentEncounter(encounter);
  }, []);

  // Check if the encounter is a special character
  const isSpecialCharacter = (name) => {
    return SpecialCharacters.some((character) => character.name === name);
  };

  // Check if the encounter is an enemy
  const isEnemy = (name) => {
    return encounters.some((enemy) => enemy.name === name);
  };

  const handleAction = (actionType) => {
    if (actionType === "explore") {
      setCurrentLocation(currentEncounter.name);
      navigation.goBack(); // Go back to the PedometerScreen
    } else if (actionType === "leave") {
      navigation.goBack(); // Go back to the PedometerScreen
    } else if (actionType === "run") {
      navigation.goBack(); // Go back to the PedometerScreen
    } else if (actionType === "attack") {
      handleCombat("attack");
    } else if (actionType === "defend") {
      handleCombat("defend");
    } else if (actionType === "give") {
      handleGiveItem();
    }
  };

  const handleCombat = (playerAction) => {
    let newCombatLog = [...combatLog];

    if (playerAction === "attack") {
      const enemyAttack = Math.floor(Math.random() * 6) + 1;
      const playerAttack = Math.floor(Math.random() * 6) + 1;
      const newEnemyHp = enemyHp - playerAttack;
      const newPlayerHp = hp - enemyAttack;

      newCombatLog.push(`You attack for ${playerAttack} damage.`);
      newCombatLog.push(`Enemy attacks for ${enemyAttack} damage.`);

      if (newEnemyHp <= 0) {
        newCombatLog.push(
          `Enemy defeated! You gain: ${currentEncounter.item_drop.join(", ")}`
        );
        addItemToInventory(currentEncounter.item_drop);
        updateBestiary(currentEncounter.name);
        Vibration.vibrate();
        navigation.goBack();
      } else if (newPlayerHp <= 0) {
        newCombatLog.push(`You have been defeated.`);
        setHp(newPlayerHp);
        Vibration.vibrate();
        navigation.goBack();
      } else {
        setEnemyHp(newEnemyHp);
        setHp(newPlayerHp);
      }
    } else if (playerAction === "defend") {
      const enemyAttack = Math.floor(Math.random() * 6) + 1;
      const defense = Math.floor(Math.random() * 2) + 1;
      const damageTaken = Math.max(0, enemyAttack - defense);
      const newPlayerHp = hp - damageTaken;

      newCombatLog.push(`You defend and reduce enemy's damage by ${defense}.`);
      newCombatLog.push(
        `Enemy attacks for ${enemyAttack} damage. You take ${damageTaken} damage.`
      );

      if (newPlayerHp <= 0) {
        newCombatLog.push(`You have been defeated.`);
        setHp(newPlayerHp);
        Vibration.vibrate();
        navigation.goBack();
      } else {
        setHp(newPlayerHp);
      }
    }

    setCombatLog(newCombatLog);
  };

  const handleGiveItem = () => {
    if (!currentEncounter || !specialCharacterEncounter) return;

    const { quest_items, reward_dialogue, reward } = currentEncounter;

    if (quest_items.every((item) => inventory.includes(item))) {
      removeItemFromInventory(quest_items);
      addItemToInventory(reward);
      setRewardDialogue(reward_dialogue);
    } else {
      setRewardDialogue("You do not have these items.");
    }
  };

  if (!currentEncounter) return null;

  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const imageSize = Math.min(screenWidth, screenHeight) * 0.6; // Adjust size to fit on screen

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {assetsMap[currentEncounter.name] && (
          <Image
            source={assetsMap[currentEncounter.name]}
            style={[styles.image, { width: imageSize, height: imageSize }]}
            resizeMode="contain"
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{currentEncounter.name}</Text>
        <Text style={styles.description}>{currentEncounter.description}</Text>
        <Text style={styles.dialogue}>{currentEncounter.dialogue}</Text>
        {specialCharacterEncounter && rewardDialogue && (
          <Text style={styles.rewardDialogue}>{rewardDialogue}</Text>
        )}
        <Text style={styles.hpText}>Your HP: {hp}</Text>
        {combat && <Text style={styles.hpText}>Enemy HP: {enemyHp}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        {combat ? (
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAction("attack")}
            >
              <Text style={styles.buttonText}>Attack</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAction("defend")}
            >
              <Text style={styles.buttonText}>Defend</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAction("run")}
            >
              <Text style={styles.buttonText}>Run</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            {specialCharacterEncounter && (
              <>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleAction("give")}
                >
                  <Text style={styles.buttonText}>Give Item</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleAction("leave")}
                >
                  <Text style={styles.buttonText}>Leave</Text>
                </TouchableOpacity>
              </>
            )}
            {!specialCharacterEncounter && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleAction("explore")}
              >
                <Text style={styles.buttonText}>Explore</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
      <ScrollView style={styles.scrollView}>
        {combatLog.map((log, index) => (
          <Text key={index} style={styles.combatLog}>
            {log}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  imageContainer: {
    marginBottom: 16,
  },
  image: {
    borderRadius: 8,
  },
  textContainer: {
    marginBottom: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
  dialogue: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
  },
  rewardDialogue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
  },
  hpText: {
    fontSize: 16,
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  scrollView: {
    marginTop: 16,
    width: "100%",
  },
  combatLog: {
    fontSize: 16,
    marginVertical: 4,
  },
});
