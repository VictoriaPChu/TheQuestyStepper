// KnownCharactersScreen.js
import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { CharacterContext } from "../CharacterContext";
import { SpecialCharacters } from "../SpecialCharacters";
import { assetsMap } from "../assetsMap";

const KnownCharactersScreen = () => {
  const { knownCharacters } = useContext(CharacterContext);
  const MAX_CHARACTERS = 6;
  const discoveredCount = Object.keys(knownCharacters).length;

  // Filter SpecialCharacters based on knownCharacters state
  const knownSpecialCharacters = SpecialCharacters.filter((character) =>
    knownCharacters.includes(character.name)
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Known Characters</Text>
      <Text style={styles.totalCount}>
        Total Discovered: {discoveredCount} / {MAX_CHARACTERS}
      </Text>
      {knownSpecialCharacters.map((character) => (
        <View key={character.name} style={styles.characterContainer}>
          <Text style={styles.characterName}>{character.name}</Text>
          <Image
            source={assetsMap[character.name]}
            style={styles.characterImage}
          />
          <Text style={styles.characterLocation}>
            Location: {character.location}
          </Text>
          <Text style={styles.characterDescription}>
            Description: {character.description}
          </Text>
          <Text style={styles.characterDescription}>
            Request: {character.dialogue.at(-1)}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  characterContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  characterName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  characterImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  characterLocation: {
    fontSize: 16,
    marginBottom: 5,
  },
  characterDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default KnownCharactersScreen;
