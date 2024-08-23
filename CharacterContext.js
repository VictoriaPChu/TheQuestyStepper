import React, { createContext, useState } from "react";
import { locations } from "./locations";

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [hp, setHp] = useState(10000);
  const [inventory, setInventory] = useState([]);
  const [statusEffects, setStatusEffects] = useState([]);
  const [bestiary, setBestiary] = useState({});
  const [knownLocations, setKnownLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [encounterCount, setEncounterCount] = useState(0); // Track consecutive enemy encounters
  const [knownCharacters, setKnownCharacters] = useState([]); // New state for known characters

  const addItemToInventory = (items) => {
    setInventory((prevInventory) => [...prevInventory, ...items]);
  };

  const removeItemFromInventory = (items) => {
    setInventory((prevInventory) =>
      prevInventory.filter((item) => !items.includes(item))
    );
  };

  const updateBestiary = (enemyName) => {
    setBestiary((prevBestiary) => {
      const newBestiary = { ...prevBestiary };
      if (newBestiary[enemyName]) {
        newBestiary[enemyName] += 1;
      } else {
        newBestiary[enemyName] = 1;
      }
      return newBestiary;
    });
  };

  const visitLocation = (locationName) => {
    const location = locations.find((loc) => loc.name === locationName);
    if (location && !knownLocations.includes(locationName)) {
      setKnownLocations((prev) => [...prev, locationName]);
    }
  };

  const enterLocation = (locationName) => {
    const location = locations.find((loc) => loc.name === locationName);
    if (location) {
      setCurrentLocation(locationName);
      visitLocation(locationName);
    }
  };

  const addKnownCharacter = (characterName) => {
    setKnownCharacters((prevCharacters) => {
      if (!prevCharacters.includes(characterName)) {
        return [...prevCharacters, characterName];
      }
      return prevCharacters;
    });
  };

  const removeKnownCharacter = (characterName) => {
    setKnownCharacters((prevCharacters) =>
      prevCharacters.filter((name) => name !== characterName)
    );
  };

  return (
    <CharacterContext.Provider
      value={{
        selectedCharacter,
        setSelectedCharacter,
        hp,
        setHp,
        inventory,
        addItemToInventory,
        removeItemFromInventory,
        statusEffects,
        setStatusEffects,
        bestiary,
        updateBestiary,
        knownLocations,
        setKnownLocations,
        currentLocation,
        setCurrentLocation,
        enterLocation,
        encounterCount,
        setEncounterCount,
        knownCharacters,
        addKnownCharacter,
        removeKnownCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
