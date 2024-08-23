import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity, // Import TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { CharacterContext } from "../CharacterContext";
import { locations } from "../locations";
import { assetsMap } from "../assetsMap";

const KnownLocationsScreen = () => {
  const { knownLocations, setCurrentLocation } = useContext(CharacterContext);
  const navigation = useNavigation(); // Access navigation object

  const handleLocationPress = (locationName) => {
    setCurrentLocation(locationName); // Set current location
    navigation.navigate("PedometerScreen"); // Navigate back to PedometerScreen
  };

  const renderLocation = (locationName) => {
    const location = locations.find((loc) => loc.name === locationName);
    if (!location) return null;

    return (
      <TouchableOpacity
        key={location.name}
        style={styles.item}
        onPress={() => handleLocationPress(location.name)} // Handle tap
      >
        {assetsMap[locationName] && (
          <Image
            source={assetsMap[locationName]}
            style={styles.locationImage}
          />
        )}
        <Text style={styles.locationName}>{location.name}</Text>
        <Text style={styles.locationDescription}>{location.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Known Locations</Text>
      <ScrollView style={styles.scrollContainer}>
        {knownLocations.map((locationName) => renderLocation(locationName))}
      </ScrollView>
    </View>
  );
};

const { width: screenWidth } = Dimensions.get("window");
const imageSize = screenWidth * 0.8; // Adjust image size to fit on screen

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
    alignItems: "center", // Center align items in the item view
  },
  locationName: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  locationDescription: {
    fontSize: 16,
    color: "#555",
    textAlign: "center", // Center align text
  },
  locationImage: {
    width: imageSize,
    height: imageSize * 0.5, // Adjust height proportionally
    marginBottom: 10,
    resizeMode: "contain", // Ensure image fits within bounds
  },
});

export default KnownLocationsScreen;
