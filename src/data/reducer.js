//import initial from "./initial"; // can use initial state for reset

const adjectives = [
  "Flying",
  "Furious",
  "Surging",
  "Majestic",
  "Dazzling",
  "Mighty",
  "Dribbling",
  "Tottering",
  "Shambling",
  "Staggering",
  "Stumbling",
  "Doddering",
  "Shambolic",
  "Drunken"
];

const everydayWords = [
  "Foot",
  "Toe",
  "Heel",
  "Hamstrung",
  "Knee",
  "Tootsie",
  "Boot",
  "Trainer",
  "ArmChair",
  "Deckchair",
  "Couch",
  "Sofa",
  "Beer",
  "Lager"
];

const nouns = [
  "Colonels",
  "Crushers",
  "Divas",
  "Amigos",
  "Stars",
  "Typhoons",
  "Ladies",
  "Boys",
  "Squirrels",
  "Brigade",
  "Foxes",
  "Heroes",
  "Wolves"
];

const generateName = () => {
  let adjective = adjectives[(Math.floor(Math.random() * adjectives.length))];  
  let everyday = everydayWords[(Math.floor(Math.random() * everydayWords.length))]; 
  let noun = nouns[(Math.floor(Math.random() * nouns.length))]; 
  
  let teamName = `${adjective} ${everyday} ${noun}`;

  return {
    teamName,
  }
}

const addPlayer = (state, { player }) => {
  
  // // Attempt to solve unique players issue. Not currently working (only works for certain orders) and probably doomed. think again later!
  // if (state.bank.some(bankPlayer => bankPlayer.name === player.name)) {
  //   state.pickedTracker -= 1;
  //   console.log(state.pickedTracker);  
  // };

  return {
    ...state,
    players: [...state.players, player],    
  }; 
};

const drawPlayer = (state) => {
  // sort bank of players by play count
  let sortedBank = [...state.bank];
  sortedBank.sort(( a, b ) => a.playCount - b.playCount);
  
    // // Attempt to solve unique players issue. Not currently working (only works for certain orders) and probably doomed. think again later!
    // if (state.players.some(player => player.name === sortedBank[state.pickedTracker].name)) {
    //   console.log(sortedBank[state.pickedTracker].name);  
    //   state.pickedTracker += 1;
    // };         

  let lowestPlaysPlayer = sortedBank[state.pickedTracker];

  return {
    ...state,
    picked: [...state.picked, lowestPlaysPlayer],
    pickedTracker: state.pickedTracker + 1, // increment tracker on successful pick
    players: [...state.players, lowestPlaysPlayer],    
  }; 
};

const randomiseTeams = (state) => {
  let players = [...state.players];
  let shuffledPlayers = [];

  // For genuine (pseudo!)randomness, players are **pulled** at random from players list, and then pushed to front of new list.
  // This avoids biasing effects: should players be pushed at random into an empty list, those players pushed first will cluster together, before the list grows.
  // This matters because the player bank always adds players in a predictable order (according to their play-counts) 
  for (let i = players.length; i > 0; i -= 1) {
    let pick = players.splice(Math.floor(Math.random() * i), 1);
    shuffledPlayers.push(pick[0]);
  };

  return {
    ...state,
    team1: shuffledPlayers.slice(0, (shuffledPlayers.length / 2)),    
    team2: shuffledPlayers.slice(shuffledPlayers.length / 2),    
  };
};

const generateName1 = (state) => {
  let name = generateName().teamName;
  return {
    ...state,
    team1Name: name,
  }; 
};

const generateName2 = (state) => {
  let name = generateName().teamName;
  return {
    ...state,
    team2Name: name,
  }; 
};

const save = (state) => {  
  //Iterate over players list
  for (let i = 0; i < state.players.length; i += 1) {
    // If the bank contains a player whose name matches the current player from the player list
    if (state.bank.some(player => player.name === state.players[i].name)) {
      // Then look throuh the bank 
      for (let bankIndex = 0; bankIndex < state.bank.length; bankIndex += 1) {
        // Find the relevant player object (by matching the name property of the player object)
        if (state.bank[bankIndex].name === state.players[i].name) {
          // and increment its playcount
          state.bank[bankIndex].playCount += 1;
        }
      }
    }
    // If control reaches here, the a player of this name doesn't exist in the bank    
    else {
      // Add them, with a play-count of 1
      state.players[i].playCount += 1;
      // And push them to the bank
      state.bank.push(state.players[i]);
    }
  };

  return {
    ...state,
    // Reset all state, except player bank
    players: [], 
    team1: [],
    team2: [],
    team1Name: "Team 1",
    team2Name: "Team 2",
    picked: [],
    pickedTracker: 0,
  }; 
};

const reset = (state) => {
  return {
    ...state,
    players: [],
    picked: [],
    pickedTracker: 0,
  }; 
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER": return addPlayer(state, action);
    case "DRAW_PLAYER": return drawPlayer(state);
    case "RANDOMISE_TEAMS": return randomiseTeams(state);
    case "GENERATE_NAME1": return generateName1(state);
    case "GENERATE_NAME2": return generateName2(state);
    case "SAVE": return save(state);
    case "RESET": return reset(state);;
    default: return state;
  }
};

export default reducer;