import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { CharacterContext } from "../CharacterContext"; // Import the context

export default function GameScreen({ navigation }) {
  const { selectedCharacter, setSelectedCharacter } =
    useContext(CharacterContext); // Get the setter from context

  const characters = [
    { name: "Wizard", image: require("../assets/walking_wizard.gif") },
    { name: "Sorcerer", image: require("../assets/sorcerer.gif") },
    { name: "Knight", image: require("../assets/knight.gif") },
    { name: "Monk", image: require("../assets/monk.gif") },
    { name: "Cleric", image: require("../assets/cleric.gif") },
    { name: "Fairy", image: require("../assets/fairy.gif") },
    { name: "Druid", image: require("../assets/druid.gif") },
    { name: "Bard", image: require("../assets/bard.gif") },
    { name: "Barbarian", image: require("../assets/barbarian.gif") },
  ];

  const selectCharacter = (character) => {
    setSelectedCharacter(character.name);
    navigation.navigate("StoryScreen"); // Navigate to the StoryScreen after selecting a character
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Character</Text>
      <View style={styles.grid}>
        {characters.map((character, index) => (
          <TouchableOpacity
            key={index}
            style={styles.characterButton}
            onPress={() => selectCharacter(character)}
          >
            <Image source={character.image} style={styles.characterImage} />
            <Text style={styles.characterText}>{character.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  characterButton: {
    alignItems: "center",
    margin: 10,
  },
  characterImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  characterText: {
    fontSize: 16,
  },
});
