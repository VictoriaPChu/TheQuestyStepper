import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { CharacterContext } from "../CharacterContext";

const InventoryScreen = () => {
  const { inventory } = useContext(CharacterContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory</Text>
      <ScrollView style={styles.scrollContainer}>
        {inventory.length > 0 ? (
          inventory.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemName}>{item}</Text>
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
  noItems: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});

export default InventoryScreen;
