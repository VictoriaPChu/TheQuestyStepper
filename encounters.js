export const encounters = [
  {
    type: "enemy",
    name: "Worm Wyrm",
    dialogue: "The Worm Wyrm wriggles menacingly.",
    description: "A massive, slimy worm stares at you with a terrifying gaze.",
    actions: ["run", "attack", "talk"],
    hp: 50,
    item_drop: ["Slimy Gel", "Worm Tooth"],
    location: "Cave", // Added location field
  },
  {
    type: "enemy",
    name: "Derpasaurus Rex",
    dialogue:
      "The Derpasaurus Rex roars, but it sounds more like a confused yawn.",
    description:
      "A giant reptile with an underbite and a blank expression stands before you.",
    actions: ["run", "attack", "talk"],
    hp: 70,
    item_drop: ["Reptile Scale", "Derpy Claw"],
    location: "Haunted Forest", // Added location field
  },
  {
    type: "enemy",
    name: "Messenger bAAAAAUGH",
    dialogue:
      "The Messenger bAAAAAUGH delivers a message in a very loud and startling tone.",
    description: "A wild-eyed courier seems lost and distressed.",
    actions: ["run", "attack", "talk"],
    hp: 40,
    item_drop: ["Shattered Scroll", "Courier Bag"],
    location: "Small Questing Town", // Added location field
  },
  {
    type: "enemy",
    name: "Explode-a-Bear",
    dialogue:
      "The Explode-a-Bear shakes violently, as if it's about to blow up!",
    description: "A bear that's clearly had too much explosive honey.",
    actions: ["run", "attack", "talk"],
    hp: 60,
    item_drop: ["Bear Fur", "Explosive Honey"],
    location: "Outdoor Cat Tavern", // Added location field
  },
  {
    type: "enemy",
    name: "Knock Off Plant",
    dialogue:
      "The Knock Off Plant appears... vaguely familiar, but also distinctly cheaper.",
    description: "A plant that looks like it came from a discount store.",
    actions: ["run", "attack", "talk"],
    hp: 40,
    item_drop: ["Fake Leaf", "Plastic Stem"],
    location: "Enchanted Garden", // Added location field
  },
  {
    type: "enemy",
    name: "Standard Bandit",
    dialogue:
      "The Standard Bandit demands your valuables in the most predictable way.",
    description: "Just a regular bandit, nothing special.",
    actions: ["run", "attack", "talk"],
    hp: 50,
    item_drop: ["Stolen Coin", "Bandit's Dagger"],
    location: "Abandoned Village", // Added location field
  },
  {
    type: "enemy",
    name: "Spunky Spooky Skeleton",
    dialogue: "The Spunky Spooky Skeleton clatters its bones rhythmically.",
    description: "A skeleton with a mischievous grin and a sense of rhythm.",
    actions: ["run", "attack", "talk"],
    hp: 55,
    item_drop: ["Bone Shard", "Haunted Rib"],
    location: "Mysterious Tower", // Added location field
  },
  {
    type: "enemy",
    name: "Heckle Boo",
    dialogue: "The Heckle Boo heckles you with surprisingly witty insults.",
    description: "A mischievous ghost that loves to roast people.",
    actions: ["run", "attack", "talk"],
    hp: 45,
    item_drop: ["Ectoplasm", "Witty Insult Scroll"],
    location: "Haunted Forest", // Added location field
  },
  {
    type: "enemy",
    name: "Sentient Explosive Chew Toy",
    dialogue: "It squeaks menacingly as it approaches, its fuse lit.",
    description:
      "A seemingly harmless toy, except it's alive and highly explosive.",
    actions: ["run", "attack", "negotiate"],
    item_drop: ["Squeaky Shard", "Burnt Rubber"],
    hp: 20,
    location: "Outdoor Cat Tavern", // Added location field
  },
  {
    type: "enemy",
    name: "Octobat",
    dialogue:
      "The Octobat screeches from above, its tentacles flapping ominously.",
    description:
      "A bizarre fusion of octopus and bat, flying through the air with eight wings.",
    actions: ["run", "attack", "negotiate"],
    item_drop: ["Wing Membrane", "Tentacle Goo"],
    hp: 35,
    location: "Cave", // Added location field
  },
  {
    type: "enemy",
    name: "Canadian Goose",
    dialogue:
      "It honks aggressively, flapping its wings with malicious intent.",
    description:
      "A notoriously aggressive goose, known for chasing anything that moves.",
    actions: ["run", "attack", "negotiate"],
    item_drop: ["Goose Feather", "Beak Fragment"],
    hp: 15,
    location: "Mermaid Spring", // Added location field
  },
  {
    type: "enemy",
    name: "Pasta Pelican",
    dialogue:
      "The pelican lands gracefully, but its beak drips with spaghetti.",
    description:
      "A large pelican that somehow acquired a taste for pasta, and it’s not sharing.",
    actions: ["run", "attack", "negotiate"],
    item_drop: ["Pasta Strand", "Pelican Feather"],
    hp: 25,
    location: "Whale Infested Waters", // Added location field
  },
  {
    type: "enemy",
    name: "Uncanny Turkey",
    dialogue:
      "Its eyes glint with an unsettling intelligence as it gobbles quietly.",
    description:
      "This turkey seems far too aware, and it’s plotting something.",
    actions: ["run", "attack", "negotiate"],
    item_drop: ["Turkey Feather", "Creepy Beak"],
    hp: 30,
    location: "Abandoned Village", // Added location field
  },
  {
    type: "enemy",
    name: "Fish Plane",
    dialogue:
      "The flying fish circles in the air, its fins cutting through the wind.",
    description:
      "A fish that somehow learned to fly, resembling a small airplane.",
    actions: ["run", "attack", "negotiate"],
    item_drop: ["Winged Scale", "Propeller Fin"],
    hp: 40,
    location: "Whale Infested Waters", // Added location field
  },
  {
    type: "enemy",
    name: "Possessed Dinosaur Floaty",
    dialogue:
      "The inflatable dino's eyes glow red, bobbing menacingly toward you.",
    description:
      "Once a harmless pool toy, now it’s filled with a dangerous spirit.",
    actions: ["run", "attack", "negotiate"],
    item_drop: ["Deflated Plastic", "Spirit Residue"],
    hp: 22,
    location: "Mermaid Spring", // Added location field
  },
  {
    type: "enemy",
    name: "Sentient Carrot",
    dialogue: "The carrot glares at you menacingly, ready to attack.",
    description: "A carrot with a bad attitude and sharp roots.",
    actions: ["run", "attack", "negotiate"],
    item_drop: ["Carrot Shavings", "Leafy Top"],
    hp: 12,
    location: "Enchanted Garden", // Added location field
  },
];

export const actionsDictionary = {
  run: {
    description: "You run away from the battle.",
    type: "player_reaction",
    nextAction: null,
    displayName: "Run",
    consequence: [],
  },
  attack: {
    description: "You attack the enemy.",
    type: "player_reaction",
    nextAction: "enter_combat",
    displayName: "Attack",
    consequence: [],
  },
  talk: {
    description: "You try to talk to the enemy.",
    type: "player_reaction",
    nextAction: "dialogue",
    displayName: "Talk",
    consequence: [],
  },
  enter_combat: {
    description: "Combat has begun!",
    type: "status_effect",
    nextAction: null,
    consequence: [],
  },
  dialogue: {
    description: "You engage in conversation.",
    type: "dialogue",
    nextAction: null,
    consequence: [],
  },
};
