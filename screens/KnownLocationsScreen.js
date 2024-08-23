import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CharacterContext } from "../CharacterContext";
import { locations } from "../locations";
import { assetsMap } from "../assetsMap";

const KnownLocationsScreen = () => {
  const { knownLocations, setCurrentLocation } = useContext(CharacterContext);
  const navigation = useNavigation();

  const handleLocationPress = (locationName) => {
    setCurrentLocation(locationName);
    navigation.navigate("PedometerScreen");
  };

  const renderLocation = (locationName) => {
    const location = locations.find((loc) => loc.name === locationName);
    if (!location) return null;

    // Format enemies and special characters with labels and commas
    const enemies = location.enemies?.join(", ") || "None";
    const specialCharacters = location.special_characters?.join(", ") || "None";

    return (
      <TouchableOpacity
        key={location.name}
        style={styles.item}
        onPress={() => handleLocationPress(location.name)}
      >
        {assetsMap[locationName] && (
          <Image
            source={assetsMap[locationName]}
            style={styles.locationImage}
          />
        )}
        <Text style={styles.locationName}>{location.name}</Text>
        <Text style={styles.locationDescription}>{location.description}</Text>
        <Text style={styles.locationDescription}>
          <Text style={styles.label}>Enemies: </Text>
          {enemies}
        </Text>
        <Text style={styles.locationDescription}>
          <Text style={styles.label}>Special Characters: </Text>
          {specialCharacters}
        </Text>
      </TouchableOpacity>
    );
  };

  const totalLocations = 10;
  const discoveredLocations = knownLocations.length;
  const remainingLocations = totalLocations - discoveredLocations;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Known Locations</Text>
      <Text style={styles.counter}>
        {discoveredLocations} out of {totalLocations} locations discovered
      </Text>
      <ScrollView style={styles.scrollContainer}>
        {knownLocations.map((locationName) => renderLocation(locationName))}
      </ScrollView>
    </View>
  );
};

const { width: screenWidth } = Dimensions.get("window");
const imageSize = screenWidth * 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  counter: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
    fontWeight: "bold",
  },
  scrollContainer: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
  locationName: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  locationDescription: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  locationImage: {
    width: imageSize,
    height: imageSize * 0.5,
    marginBottom: 10,
    resizeMode: "contain",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
});

export default KnownLocationsScreen;
