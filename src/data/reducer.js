// import initial from "./initial"; // for reset

// Take values set in the SAVE_PLAYERS action and updates the state with these new values
// Second arg in curlies are properties of the action
const savePlayers = (state, { players }) => {
  // console.log("Players list in state: ", this.players); 
  return {
    ...state, 
    players: players,    
  }; // Following this, the above are now part of state, so we don't pass them in as actions below
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_PLAYERS": return savePlayers(state, action);
    default: return state;
  }
};

export default reducer;