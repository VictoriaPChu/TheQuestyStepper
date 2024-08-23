import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { CharacterContext } from "../CharacterContext";
import { assetsMap } from "../assetsMap"; // Import the assets map
import { encounters } from "../encounters"; // Import the encounters

const MAX_ENEMIES = 15; // Maximum number of enemies

const BestiaryScreen = () => {
  const { bestiary } = useContext(CharacterContext);

  // Calculate the total discovered enemies
  const discoveredCount = Object.keys(bestiary).length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bestiary</Text>
      <Text style={styles.totalCount}>
        Total Discovered: {discoveredCount} / {MAX_ENEMIES}
      </Text>
      <ScrollView style={styles.scrollContainer}>
        {Object.entries(bestiary).map(([enemy, count]) => {
          // Find the encounter for the current enemy
          const encounter = encounters.find((e) => e.name === enemy);
          return (
            <View key={enemy} style={styles.item}>
              {assetsMap[enemy] && (
                <Image source={assetsMap[enemy]} style={styles.enemyImage} />
              )}
              <View style={styles.textContainer}>
                <Text style={styles.enemyName}>{enemy}</Text>
                <Text style={styles.enemyCount}>Defeated: {count}</Text>
                {encounter && (
                  <>
                    <Text style={styles.enemyLocation}>
                      Location: {encounter.location}
                    </Text>
                    <Text style={styles.itemDrop}>
                      Item Drops: {encounter.item_drop.join(", ")}
                    </Text>
                  </>
                )}
              </View>
            </View>
          );
        })}
        {Object.keys(bestiary).length === 0 && (
          <Text style={styles.noEntries}>No entries in the bestiary.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  totalCount: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  scrollContainer: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
  },
  enemyImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  enemyName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  enemyCount: {
    fontSize: 16,
    color: "#555",
  },
  enemyLocation: {
    fontSize: 16,
    color: "#888",
  },
  itemDrop: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  noEntries: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});

export default BestiaryScreen;
