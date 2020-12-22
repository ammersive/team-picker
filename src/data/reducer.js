// import initial from "./initial"; // use initial state for reset


// Take values set in the ADD_PLAYER action and update the state with these new values
// Second arg in curlies are properties of the action, necessary here
const addPlayer = (state, { player }) => {
  return {
    ...state,
    players: [...state.players, player],    
  }; // Following this, the above are now part of state, so we don't pass them in as actions below
};

const createTeams = (state) => {
  return {
    ...state,
    team1: [...state.players, "New player from reducer"],    
    team2: [...state.players, "Another new player from reducer"],    
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER": return addPlayer(state, action);
    case "CREATE_TEAMS": return createTeams(state);
    default: return state;
  }
};

export default reducer;