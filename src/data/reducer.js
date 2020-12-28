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

const pickPlayer = (state, { player }) => {

  if (player.isPicked === false) {
    player.isPicked = true;
    state.players = [...state.players, player];
  };  

  return {
    ...state   
  }; 
};

// Draw reducer ensures lowest plays players are picked first, but that those with the same number of players are picked at random to avoid bias over time.
const drawPlayer = (state) => {
  
  // If at least one player in the bank remains unpicked:
  if (state.bank.some(player => player.isPicked === false)) {

    // Filter players who have already been selected
    let filteredBank = state.bank.filter( player => player.isPicked === false);
    // Build a new randomised list from the filtered bank
    let randomisedFilter = [];
    for (let i = filteredBank.length; i > 0; i -= 1) {
      let pick = filteredBank.splice(Math.floor(Math.random() * i), 1);
      randomisedFilter.push(pick[0]);
    };
    // Sort highest to lowest playcounts (players with same playcounts will now not always appear at same/similar indices)
    randomisedFilter.sort(( a, b ) => a.playCount - b.playCount); 
    // Select the first (so, a player from the set of players with the lowest score, produced randomly), and add to players list
    randomisedFilter[0].isPicked = true;
    state.players = [...state.players, randomisedFilter[0]];
  };

  return {
    ...state,
  }; 
};

const addPlayer = (state, { player }) => {

  // trim trailing whitespace from player name
  player.name = player.name.trimLeft().trimRight();
  console.log(state.bank);
  
  // prevent nameless players
  if (player.name === "") {
    alert("You cannot add a nameless player!");
    return state;
  // prevent non-unique player names (case insensitive)
  } else if (state.bank.some(bankPlayer => bankPlayer.name.toLowerCase() === player.name.toLowerCase())) {
    alert(`A player called ${player.name} already exists in the bank. You can either add them directly from the bank with the pick button, or choose a different name`);
    return state;
    // invite user to differentiate a name that matches a picked name, in case e.g. 2 Jens are playing
  } else if (state.players.some(playersMember => playersMember.name.toLowerCase() === player.name.toLowerCase())) {
    alert(`A player called ${player.name} has already been picked. You can add an initial to tell them apart`);
    return state;
  } else {

  player.isPicked = true;
  player.isNew = true;

  };

  return {
    ...state,
    players: [...state.players, player],    
  }; 
};

const startGame = (state) => {
  return {
    ...state,
    playersChosen: true,  
  };
}

const clearPickedPlayers = (state) => {
  state.bank.forEach(player => resetIsPicked(player));

  return {
    ...state,
    players: [],
  }; 
};

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

const generateName = () => {
  let adjective = adjectives[(Math.floor(Math.random() * adjectives.length))];  
  let everyday = everydayWords[(Math.floor(Math.random() * everydayWords.length))]; 
  let noun = nouns[(Math.floor(Math.random() * nouns.length))]; 
  
  let teamName = `${adjective} ${everyday} ${noun}`;

  return {
    teamName,
  }
}

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

const clearBank = (state) => {
  window.confirm("Do you want to wipe the bank? This will delete all player information.") ? state.bank = [] : state.bank = [...state.bank];
  return {
    ...state,  
  }; 
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_BANK": return clearBank(state);;
    case "PICK_PLAYER": return pickPlayer(state, action);
    case "DRAW_PLAYER": return drawPlayer(state);
    case "ADD_PLAYER": return addPlayer(state, action);
    case "CREATE_TEAMS": return startGame(randomiseTeams(state));
    case "CLEAR_CLICKED_PLAYERS": return clearPickedPlayers(state);;
    case "RANDOMISE_TEAMS": return randomiseTeams(state);
    case "GENERATE_NAME1": return generateName1(state);
    case "GENERATE_NAME2": return generateName2(state);
    case "SAVE": return save(state);
    default: return state;
  }
};

export default reducer;