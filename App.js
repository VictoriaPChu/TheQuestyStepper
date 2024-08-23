import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "./screens/MainMenu";
import GameScreen from "./screens/GameScreen";
import StoryScreen from "./screens/StoryScreen";
import { CharacterProvider } from "./CharacterContext"; // Import the provider
import PedometerScreen from "./screens/PedometerScreen";
import RandomEncounterScreen from "./screens/RandomEncounterScreen";
import BestiaryScreen from "./screens/BestiaryScreen";
import InventoryScreen from "./screens/InventoryScreen";
import KnownLocationsScreen from "./screens/KnownLocationsScreen";
import KnownCharactersScreen from "./screens/KnownCharactersScreen";
import EndScreen from "./screens/EndScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <CharacterProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainMenu">
          <Stack.Screen
            name="MainMenu"
            component={MainMenu}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GameScreen"
            component={GameScreen}
            options={{ title: "QuestSteps" }}
          />
          <Stack.Screen
            name="StoryScreen"
            component={StoryScreen}
            options={{ title: "Story" }}
          />
          <Stack.Screen
            name="PedometerScreen"
            component={PedometerScreen}
            options={{ title: "Story" }}
          />
          <Stack.Screen
            name="RandomEncounterScreen"
            component={RandomEncounterScreen}
          />
          <Stack.Screen name="BestiaryScreen" component={BestiaryScreen} />
          <Stack.Screen name="InventoryScreen" component={InventoryScreen} />
          <Stack.Screen
            name="KnownLocationsScreen"
            component={KnownLocationsScreen}
          />
          <Stack.Screen
            name="KnownCharactersScreen"
            component={KnownCharactersScreen}
          />
          <Stack.Screen name="EndScreen" component={EndScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CharacterProvider>
  );
}
