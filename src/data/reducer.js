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

  // trim trailing whitespace from player name
  player.name = player.name.trimLeft().trimRight();
  
  // prevent nameless players
  if (player.name === "") {
    return alert("You cannot add a nameless player!");
  // prevent non-unique player names (case insensitive)
  } else if (state.bank.some(bankPlayer => bankPlayer.name.toLowerCase() === player.name.toLowerCase())) {
    return alert(`A player called ${player.name} already exists in the bank. You can either add them directly from the bank with the pick button, or choose a different name`);
  // invite user to differentiate a name that matches a picked name, in case e.g. 2 Jens are playing
  } else if (state.players.some(playersMember => playersMember.name.toLowerCase() === player.name.toLowerCase())) {
    return alert(`A player called ${player.name} has already been picked. You can add an initial to tell them apart`);
  } else {

  player.isPicked = true;
  player.isNew = true;

  };

  return {
    ...state,
    players: [...state.players, player],    
  }; 
};

const pickPlayer = (state, { player }) => {

  if (player.isPicked === false) {
    player.isPicked = true;
    state.players = [...state.players, player];
  };  

  return {
    ...state   
  }; 
};

const drawPlayer = (state) => {
  // If at least one player in the bank remains unpicked:
  if (state.bank.some(player => player.isPicked === false)) {
    // If so, filter out selected players, order by fewest plays, and add first player to players list
    let filteredBank = state.bank.filter( player => player.isPicked === false).sort(( a, b ) => a.playCount - b.playCount); 
    filteredBank[0].isPicked = true;
    state.players = [...state.players, filteredBank[0]];
  };

  return {
    ...state,
  }; 
};

const startGame = (state) => {
  return {
    ...state,
    playersChosen: true,  
  };
}

const randomiseTeams = (state) => {
  let players = [...state.players];
  let shuffledPlayers = [];

  // For genuine (pseudo!)randomness, players are **pulled** at random from players list, and then pushed to front of new list.
  // This avoids biasing effects: should players be pushed at random into an empty list, those players pushed first will cluster together before the list grows.
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

const incrementPlayCount = (player) => {
  player.playCount = player.playCount + 1;
  return player;
}

const resetIsPicked = (player) => {
  player.isPicked = false;
  return player;
}

const updateIsNew = (player) => {
  player.isNew = false;
  return player;
}

const save = (state) => {
  // Increment the playCount of each player and reset isPicked to false
  state.players.forEach(player => incrementPlayCount(resetIsPicked(player)));
  // Push new players to the bank, reseting their isNew property to false
  // state.players.forEach(player => player.isNew ? state.bank = [...state.bank, updateIsNew(player)] : null );
  state.players.forEach(player => player.isNew ? state.bank = [updateIsNew(player), ...state.bank] : null );

  return {
    ...state,
    // Reset all state, except player bank
    players: [], 
    team1: [],
    team2: [],
    team1Name: "Team 1",
    team2Name: "Team 2",
    playersChosen: false,
  }; 
};

const reset = (state) => {
  state.bank.forEach(player => resetIsPicked(player));

  return {
    ...state,
    players: [],
  }; 
};

const resetBank = (state) => {
  window.confirm("Do you want to wipe the bank? This will delete all player information.") ? state.bank = [] : state.bank = [...state.bank];
  return {
    ...state,  
  }; 
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER": return addPlayer(state, action);
    case "PICK_PLAYER": return pickPlayer(state, action);
    case "DRAW_PLAYER": return drawPlayer(state);
    case "CREATE_TEAMS": return startGame(randomiseTeams(state));
    case "RANDOMISE_TEAMS": return randomiseTeams(state);
    case "GENERATE_NAME1": return generateName1(state);
    case "GENERATE_NAME2": return generateName2(state);
    case "SAVE": return save(state);
    case "RESET": return reset(state);;
    case "RESET_BANK": return resetBank(state);;
    default: return state;
  }
};

export default reducer;