import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { CharacterContext } from "../CharacterContext";

const highlightItems = [
  "Wishing Stone 1",
  "Wishing Stone 2",
  "Wishing Stone 3",
  "Healing Noodles",
  "Note on the Curse of the Tutorial Npc",
  "Heart's Desire",
];

const InventoryScreen = () => {
  const { inventory } = useContext(CharacterContext);

  // Function to count occurrences of each item
  const countOccurrences = (arr) => {
    return arr.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
  };

  const itemCounts = countOccurrences(inventory);

  // Function to determine if the item should be highlighted
  const isHighlighted = (item) => highlightItems.includes(item);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory</Text>
      <ScrollView style={styles.scrollContainer}>
        {Object.entries(itemCounts).length > 0 ? (
          Object.entries(itemCounts).map(([item, count]) => (
            <View key={item} style={styles.item}>
              <Text
                style={[
                  styles.itemName,
                  isHighlighted(item) && styles.highlightedItem,
                ]}
              >
                {item} {count > 1 && `(${count})`}
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.noItems}>No items in inventory.</Text>
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
  scrollContainer: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemName: {
    fontSize: 18,
  },
  highlightedItem: {
    fontWeight: "bold",
    color: "gold", // Highlight color, you can customize it
  },
  noItems: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});

export default InventoryScreen;
