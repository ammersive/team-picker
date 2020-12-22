// import initial from "./initial"; // use initial state for reset


// Take values set in the ADD_PLAYER action and update the state with these new values
// Second arg in curlies are properties of the action, necessary here
const addPlayer = (state, { player }) => {
  return {
    ...state,
    players: [...state.players, player],    
  }; // Following this, the above are now part of state, so we don't pass them in as actions below
};

const randomiseTeams = (state) => {
  let players = [...state.players];
  let shuffledPlayers = [];

  for (let i = players.length; i > 0; i--) {
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
  return {
    ...state,
    team1Name: "Bob",   
  }; 
};

const generateName2 = (state) => {
  return {
    ...state,
    team2Name: "Bella",   
  }; 
};


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER": return addPlayer(state, action);
    case "RANDOMISE_TEAMS": return randomiseTeams(state);
    case "GENERATE_NAME1": return generateName1(state);
    case "GENERATE_NAME2": return generateName2(state);
    default: return state;
  }
};

export default reducer;