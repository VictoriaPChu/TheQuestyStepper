import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { CharacterContext } from "../CharacterContext"; // Import the context
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

export default function StoryScreen() {
  const { selectedCharacter } = useContext(CharacterContext); // Get the selected character from context
  const navigation = useNavigation(); // Access navigation object using useNavigation hook

  const storyTexts = {
    Wizard: [
      "You have chosen Old Wizard",
      "Your back hurts, You can't see or hear well, and You don't digest things as well as you used to",
      "You crave the ability to learn like you used to in your prime",
      "But you are constantly distracted by the effects of aging",
      "Your quest is to seek the ancient tome of knowledge that might help you with your many ailments.",
      "With your spells, you can overcome any obstacle.",
    ],
    Sorcerer: [
      "You have chosen Derpy Sorcerer",
      "You're a big goofball. You like to do things like run through flocks of pigeons, or break out in dance",
      "Perhaps it is the magic that compels you to act this way",
      "or perhaps its just your personality...",
      "Either way you're silliness has made you an outcast",
      "Your quest is to learn more about your magical lineage so you might find a sense of belonging.",
      "Harnessing your innate power, you face the unknown.",
    ],
    Knight: [
      "You have chosen Adorable Knight",
      "As a Knight, you uphold the values of honor and bravery.",
      "You believe in moral good and moral bad, and enjoy smiting bad things with your weapon of choice",
      "However, after smiting a thief who stole some bread to feed his family, you feel bad.",
      "Like really bad",
      "Like really really bad",
      "Perhaps he should have worked harder in life so he could provide for his family",
      "Or perhaps the lords of the land should have created better, more available jobs so it wouldn't be so hard to provide for your family",
      "Your quest is to figure out your values as you travel this world.",
      "With your sword and shield, you hope to protect the innocent.",
    ],
    Monk: [
      "You have chosen Overenthusiastic Monk",
      "You love your job. You love your god. You love your community",
      "Ever since you were a small child, your religion has brought you genuine joy and peace",
      "But for some reason, your monastery's conversion rates have been declining",
      "And people avoid you in the streets when you try to talk to them about your religion",
      "Perhaps you are communicating ineffectively due to a lack of audience awareness?",
      "Or perhaps there is something else amiss in the world?",
      "Your quest is to investigate the declining spirituality of the world",
      "With your faith and god by your side, you will save the souls of this wretched world",
    ],
    Cleric: [
      "You have chosen Hyperactive Cleric",
      "You have a pure heart and skills in medicine",
      "but an evil warlock cursed you with a 3 second attention span",
      "Once you left your party half healed during a battle when a cat walked across the battle field",
      "They still won't let you live that down",
      "Your quest is to find a cure for your affliction, so that you may be a better asset to your team and to your community",
      "With your healing powers, you... wait what was it you did again?",
    ],
    Fairy: [
      "You have chosen Suspicious Fairy",
      "You grant wishes and help out around the community",
      "But there's something not quite right about you",
      "Despite looking like a cute innocent little fairy,",
      "You feel the need to sneak and steal and deceive",
      "You can't remember much of your past and you don't know why you feel this way,",
      "but you do",
      "Whether or not you act these feelings is up to you",
      "Your quest is to learn about your past and choose whether you would like to be a good, evil, or somewhere in between",
      "With your dexterity, you explore the world and live your life how you want to",
    ],
    Druid: [
      "You have chosen Druid Hermit",
      "You don't like people. And you prefer your animal form.",
      "But unfortunately you also rely on people for your basic needs",
      "Like healthcare, groceries, and amazen primal",
      "Amazen primal won't deliver to your hermit house",
      "Your quest is to get that sorted out with Geoffrey bossos, and/or perhaps come to terms with your dependence on people",
      "With your cool druid powers, you can create supply chain.",
    ],
    Barbarian: [
      "You have chosen Caveman Barbarian",
      "You eat raw meat with your bear hands, and your stomach doesn't get upset",
      "You fly into an ape like rage and slam your fists into the floor when you are upset",
      "And today is one of those days",
      "because you ran out of meat to eat with your bear hands; also someone stole your bear hands",
      "Your quest is twofold, to find more meat and to find the bears hands with which you like to eat with",
      "With your barbarism, you will smash your way to a hearty dinner.",
    ],
    Bard: [
      "You have chosen Rave Bard",
      "You like bright colors, and music so loud it damages your hearing",
      "You like to party and create positive vibes",
      "But the evil osha compliance agents of DungeonStride have shut down your favorite music festival: Wanderlust",
      "Your quest is to override this ruling.",
      "With your incredible taste in music and company, you can throw the ultimate rave party.",
    ],
    // Add more character-specific stories here
    // ...
  };

  const storyText = storyTexts[selectedCharacter] || [
    "Your adventure begins now.",
  ];
  const generalTexts = [
    "You find a mysterious Questy Stepper in your pocket from a mysterious benefactor",
    "Your adventure begins now",
    "Good luck brave adventurer!",
  ];

  const characterSpecificText = storyTexts[selectedCharacter] || [
    "Your adventure begins now.",
  ];
  const fullStoryText = [...characterSpecificText, ...generalTexts]; // Concatenate character-specific and general texts

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Automatically fade in the first text when the component mounts
    animateTextIn();
  }, []);

  const animateTextIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const animateTextOut = (callback) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(callback);
  };

  const handleTap = () => {
    if (currentTextIndex < fullStoryText.length - 1) {
      animateTextOut(() => {
        setCurrentTextIndex(currentTextIndex + 1);
        animateTextIn();
      });
    } else {
      navigation.navigate("PedometerScreen");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <View style={styles.container}>
        <Animated.Text style={[styles.storyText, { opacity: fadeAnim }]}>
          {fullStoryText[currentTextIndex]}
        </Animated.Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  storyText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
});
