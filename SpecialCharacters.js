// SpecialCharacters.js
export const SpecialCharacters = [
  {
    type: "special character",
    name: "Tutorial KNPC",
    description:
      "A loud, overly enthusiastic character who spews tips at you in ALL CAPS.",
    location: "Small Questing Town",
    dialogue: [
      "WELCOME TO THE GAME! MAKE SURE TO CHECK EVERY CORNER FOR SECRETS!",
      "NEED A HAND? I'VE GOT TIPS FOR DAYS, FRIEND!",
      "CHANGE LOCATION TO FIGHT DIFFERENT ENEMIES AND MEET NEW PEOPLE WITH THE VIEW/CHANGE LOCATION BUTTON",
      "HELP THE NPCS TO PROGRESS, YOU CAN FIND THEM BY WALKING AROUND IN THEIR LOCATION",
      "THERE ARE 10 LOCATIONS, 6 NPCS, and 15 ENEMIES, YOU MUST ENCOUNTER THEM TO PROGRESS IN YOUR QUEST",
      "DONT FORGET TO CHECK QUEST COMPLETION FOR A HINT ON WHAT TO DO NEXT",
      "CANT FIND SOMETHING? CHECK YOUR BESTIARY FOR ITEM DROPS AND YOUR LOCATIONS FOR LISTS OF ENCOUNTERS AT THOSE LOCATIONS",
      "SCREEN STUCK? TRY HITTING BACK ON YOUR QUESTY STEPPER OR IN THE APP",
      "BUTTON WONT CLICK? TRY SCROLLING ON THE QUESTY STEPPER",
      "THROW SOME TENTACLE GOO FROM THE OCTOBATS TO MAKE ME STOP TUTORIAL NPCING",
    ],
    quest_items: ["Tentacle Goo"],
    reward_dialogue: "...",
    reward: ["Note on the Curse of the Tutorial Npc"],
    actions: ["listen", "leave"],
  },
  {
    type: "special character",
    name: "Disco Wizard",
    description:
      "A wizard who has lost his groove and needs an item to get it back.",
    location: "Mysterious Tower",
    dialogue: [
      "Hey there, I'm missing my groove. If you help me out, I'll give you a wishing stone so you can wish for whatever you want, but first, I need my groove back.",
      "I heard you can create an Amulet of spontaneous grooving by combining Ectoplasm from the Heckle Boos of the Haunted Forest, and some slimy gel from the Worm Wyrms of the local caves, Can you get those items for me?",
    ],
    quest_items: ["Ectoplasm", "Slimy Gel"],
    reward_dialogue:
      "Nice! You found my groove. Here's a wishing stone, and I've heard whispers of wishing stones in places as strange as a Mermaid's Spring or a questing town, and a Noodle guy who lives in an abandoned village who knows more about using them",
    reward: ["Wishing Stone 1"],
    actions: ["give item", "leave"],
  },
  {
    type: "special character",
    name: "Dancing Mermaid",
    description:
      "A mermaid who made a deal with an evil sea witch to get legs in exchange for 'some entertainment'. Needs an item to break the curse.",
    location: "Mermaid Spring",
    dialogue: [
      "Hey you! Help me, and I'll help you get your heart's desire with this wishing stone I found. Please break the dancing curse the sea witch put on me!",
      "I heard you can make a 'scroll of Otto's irresistable need to stand in one place without dancing' by combining the haunted rib of the Spunky Spooky Skeletons in the mysterious temple, and the beak fragment of a Canadian Geese that like to hang around this mermaid spring, Please bring me those items!",
    ],
    quest_items: ["Haunted Rib", "Beak Fragment"],
    reward_dialogue:
      "Thank you! Here's a wishing stone. I hear a sparkly wizard in a tower and a strange storekeeper in a questing town might have the others. There's also a Noodle guy who lives in an abandoned village who knows things and can heal wounds",
    reward: ["Wishing Stone 2"],
    actions: ["give item", "leave"],
  },
  {
    type: "special character",
    name: "Bad Hair StoreKeep",
    description:
      "A storekeeper cursed with a fidget spinner for hair. The backstory to how he got such a strange condition keeps changing. Probably keeps the customers coming with a good story",
    location: "Small Questing Town",
    dialogue: [
      "I've got a fidget spinner for hair after falling asleep in a windmill factory! Help me, and I'll give you something valuable.",
      "I heard you can make the magic comb of combing by combining carrot shavings from the sentient carrots of the enchanted garden, and the Propellor Fins of the fish planes of the whale infested waters",
    ],
    quest_items: ["Carrot Shavings", "Propeller Fin"],
    reward_dialogue:
      "Thanks! Here's a wishing stone. I heard there are wishing stones with a wizard that lives in a tower or a mermaid who lives in a spring. Talk to the Noodle guy who lives in an abandoned village to learn how to use them!",
    reward: ["Wishing Stone 3"],
    actions: ["give item", "leave"],
  },
  {
    type: "special character",
    name: "The Noodle Guy",
    description: "A strange noodle making guy bound to the abandoned village",
    location: "Abandoned Village",
    dialogue: [
      "Need a quick pick-me-up? My noodles are just what you need! I will require you to collect me an item tho, You see, I am bound to this village after selling part of my soul to make a noodle shop, I need to collect spirit residue to rebuild my soul and escape!. You can get them from the Possessed Dinosaur Floaties of the mermaid spring.",
    ],
    quest_items: ["Spirit Residue"],
    reward_dialogue:
      "Enjoy your noodles! No wishing stones here, but I hear there's a wizard, a mermaid, and a shopkeeper you might want to talk to. And once you get the wishing stones, to seek out a sleeping cat who loves shiny stones to utilize them!",
    reward: ["Healing Noodles"],
    actions: ["eat noodles", "leave"],
  },
  {
    type: "special character",
    name: "Captain Chonkers",
    description:
      "A massive, sleeping cat that is somehow the key to your heart's desire.",
    location: "Outdoor Cat Tavern",
    dialogue: [
      "Zzz... (The Captain slumbers deeply. You notice three small indentations, just the right size for wishing stones.)",
      "If you place the stones here, maybe... just maybe...",
    ],
    quest_items: ["Wishing Stone 1", "Wishing Stone 2", "Wishing Stone 3"],
    reward_dialogue: "The stones glow, and your wish is granted!",
    reward: ["Heart's Desire"],
    actions: ["place stones", "leave"],
  },
];
