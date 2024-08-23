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

export default function EndScreen() {
  const { selectedCharacter } = useContext(CharacterContext); // Get the selected character from context
  const navigation = useNavigation(); // Access navigation object using useNavigation hook

  const endTexts = {
    Wizard: [
      "Having found the ancient tome of knowledge, the Old Wizard's ailments began to fade.",
      "His mind sharpened, his back straightened, and he once again felt like his old self.",
      "He spent his remaining years teaching young wizards, passing on his newfound wisdom.",
      "Though the effects of aging never fully left him, he was content knowing he had left a lasting legacy.",
    ],
    Sorcerer: [
      "After discovering the truth of his magical lineage, the Derpy Sorcerer found a place where he truly belonged.",
      "No longer feeling the need to prove himself, he embraced his goofy nature with pride.",
      "He became a beloved figure, known far and wide for bringing joy and laughter wherever he went.",
      "In the end, his silliness united people, and he finally felt accepted.",
    ],
    Knight: [
      "The Adorable Knight pondered his values and found a middle ground between justice and mercy.",
      "He became known as the Kind Knight, balancing his sense of duty with compassion.",
      "The people he once protected now saw him as a true hero, both strong and wise.",
      "In his final days, he knew he had done right by both the law and his heart.",
    ],
    Monk: [
      "The Overenthusiastic Monk discovered that spirituality had not declined, but had evolved.",
      "With newfound understanding, he adjusted his teachings to resonate with the modern world.",
      "His monastery flourished, and people began to listen to his words with renewed interest.",
      "He remained ever joyful, his faith stronger than ever before.",
    ],
    Cleric: [
      "The Hyperactive Cleric found a cure for her curse, restoring her focus and calm.",
      "No longer distracted, she became a powerful healer, saving countless lives.",
      "Her party forgave her past mistakes, and she became a legend among clerics.",
      "She could finally give her all to those she cared about, with no distractions in sight.",
    ],
    Fairy: [
      "The Suspicious Fairy learned the truth of her past and chose a path of goodness.",
      "She used her abilities to help those in need, gaining the trust of the community.",
      "While the temptation to deceive never fully left her, she now used her skills for good.",
      "Her past no longer defined her, and she finally felt at peace with herself.",
    ],
    Druid: [
      "The Druid Hermit convinced Geoffrey Bossos to deliver to remote areas, solving his problem.",
      "With a regular supply of goods, he could enjoy the solitude of the wilderness without worry.",
      "He realized that some reliance on others was necessary, but it didn't mean he had to sacrifice his love for nature.",
      "He continued to live happily as a hermit, surrounded by the animals he loved.",
    ],
    Barbarian: [
      "The Caveman Barbarian found the bear hands and a bountiful supply of meat.",
      "His rage subsided, and he returned to his simple life, eating with his bear hands.",
      "Satisfied with his lot, he no longer sought out conflict, preferring peace and quiet.",
      "He became a legend among barbarians, known for his strength and contentment.",
    ],
    Bard: [
      "The Rave Bard successfully overturned the ruling and revived Wanderlust.",
      "His epic parties became the stuff of legend, attracting revelers from far and wide.",
      "With his mission accomplished, he continued to spread joy through music and dance.",
      "The world was a brighter place thanks to his unwavering dedication to fun.",
    ],
    // Add more character-specific endings here
    // ...
  };

  const endText = endTexts[selectedCharacter] || [
    "Your adventure has come to a satisfying conclusion.",
  ];

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
    if (currentTextIndex < endText.length - 1) {
      animateTextOut(() => {
        setCurrentTextIndex(currentTextIndex + 1);
        animateTextIn();
      });
    } else {
      navigation.navigate("PedometerScreen"); // Navigate back to the main screen
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <View style={styles.container}>
        <Animated.Text style={[styles.endText, { opacity: fadeAnim }]}>
          {endText[currentTextIndex]}
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
  endText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
});
