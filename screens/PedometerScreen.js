import React, { useEffect, useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Vibration,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Pedometer } from "expo-sensors";
import { useNavigation } from "@react-navigation/native";
import { CharacterContext } from "../CharacterContext";

export default function PedometerScreen() {
  const {
    selectedCharacter,
    hp,
    statusEffects,
    inventory,
    setSelectedCharacter,
    currentLocation,
    knownCharacters,
  } = useContext(CharacterContext);

  const [pedometerAvailable, setPedometerAvailable] = useState("");
  const [stepCount, setStepCount] = useState(0);
  const [stepsToEncounter, setStepsToEncounter] = useState(5);
  const [questStatusMessage, setQuestStatusMessage] = useState("");

  const navigation = useNavigation();

  const characterBackgrounds = {
    Wizard: require("../assets/walking_wizard.gif"),
    Sorcerer: require("../assets/sorcerer.gif"),
    Knight: require("../assets/knight.gif"),
    Monk: require("../assets/monk.gif"),
    Cleric: require("../assets/cleric.gif"),
    Fairy: require("../assets/fairy.gif"),
    Druid: require("../assets/druid.gif"),
    Bard: require("../assets/bard.gif"),
    Barbarian: require("../assets/barbarian.gif"),
  };

  useEffect(() => {
    subscribe();
    checkPedometerAvailability();
  }, []);

  useEffect(() => {
    if (stepCount >= stepsToEncounter) {
      triggerEncounter();
    }
  }, [stepCount]);

  const triggerEncounter = () => {
    Vibration.vibrate();
    navigation.navigate("RandomEncounterScreen");
  };

  const subscribe = () => {
    Pedometer.watchStepCount((result) => {
      setStepCount(result.steps);
    });
  };

  const checkPedometerAvailability = async () => {
    const result = await Pedometer.isAvailableAsync();
    setPedometerAvailable(String(result));
  };

  const increaseStepsToEncounter = () => {
    setStepsToEncounter((prev) => prev + 1);
  };

  const decreaseStepsToEncounter = () => {
    setStepsToEncounter((prev) => (prev > 1 ? prev - 1 : 1)); // Prevent from going below 1
  };

  const checkQuestCompletion = () => {
    const hasWishingStone1 = inventory.includes("Wishing Stone 1");
    const hasWishingStone2 = inventory.includes("Wishing Stone 2");
    const hasWishingStone3 = inventory.includes("Wishing Stone 3");
    const hasHealingNoodles = inventory.includes("Healing Noodles");
    const hasHeartsDesire = inventory.includes("Heart's Desire");

    if (!hasWishingStone1 || !hasWishingStone2 || !hasWishingStone3) {
      setQuestStatusMessage("Seek out the Wishing Stones.");
    } else if (
      hasWishingStone1 &&
      hasWishingStone2 &&
      hasWishingStone3 &&
      !hasHealingNoodles
    ) {
      setQuestStatusMessage(
        "Go get some noodles from the Noodle Guy in the Abandoned Village. He has information on how to use your wishing stones!"
      );
    } else if (
      hasWishingStone1 &&
      hasWishingStone2 &&
      hasWishingStone3 &&
      hasHealingNoodles &&
      !hasHeartsDesire
    ) {
      setQuestStatusMessage(
        "Go to the Outdoor Cat Tavern to seek out Captain Chonkers."
      );
    } else if (hasHeartsDesire) {
      setQuestStatusMessage("Quest Complete!");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={characterBackgrounds[selectedCharacter]}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.headingDesign}>
              Is Pedometer available on the device: {pedometerAvailable}
            </Text>
            <Text style={styles.stepCountText}>Total Steps: {stepCount}</Text>
            <Text style={styles.hpText}>HP: {hp}</Text>

            {currentLocation && (
              <Text style={styles.currentLocationText}>
                Current Location: {currentLocation}
              </Text>
            )}
            <Text style={styles.currentLocationText}>
              Set steps to Encounter:
            </Text>
            <View style={styles.counterContainer}>
              <TouchableOpacity onPress={decreaseStepsToEncounter}>
                <Text style={styles.counterButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterText}>{stepsToEncounter}</Text>
              <TouchableOpacity onPress={increaseStepsToEncounter}>
                <Text style={styles.counterButton}>+</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title="View Bestiary"
                onPress={() => navigation.navigate("BestiaryScreen")}
              />
              <Button
                title="View Inventory"
                onPress={() => navigation.navigate("InventoryScreen")}
              />
              <Button
                title="View/Change Locations"
                onPress={() => navigation.navigate("KnownLocationsScreen")}
              />
              <Button
                title="View Known Characters"
                onPress={() => navigation.navigate("KnownCharactersScreen")}
              />
              <Button
                title="Check Quest Completion"
                onPress={checkQuestCompletion}
              />
            </View>

            {/* Display quest status message */}
            {questStatusMessage ? (
              <Text style={styles.questStatusText}>{questStatusMessage}</Text>
            ) : null}
            {/* Display end screen button if quest is complete */}
            {questStatusMessage === "Quest Complete!" && (
              <Button
                title="Proceed to End Screen"
                onPress={() => navigation.navigate("EndScreen")}
              />
            )}
          </View>
        </ScrollView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headingDesign: {
    color: "white",
    backgroundColor: "rgba(155,89,182,0.5)",
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  stepCountText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  hpText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    marginTop: 10,
  },
  currentLocationText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    marginTop: 20,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  counterButton: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(52, 152, 219, 0.8)",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    marginHorizontal: 20,
  },
  counterText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: "80%",
  },
  questStatusText: {
    fontSize: 18,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    marginTop: 20,
  },
});
