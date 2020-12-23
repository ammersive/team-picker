// Action creators:
// Functions which return an action when called (from a component wrapper)

export const addPlayer = ({ player }) => {
  return {
    type: "ADD_PLAYER",
    player: player,
  };
};

export const drawPlayer = () => {
  return {
    type: "DRAW_PLAYER"
  };
};

export const createTeams = () => {
  return {
    type: "RANDOMISE_TEAMS",
  };
};

export const shuffleTeams = () => {
  return {
    type: "RANDOMISE_TEAMS",
  };
};

export const generateName1 = () => {
  return {
    type: "GENERATE_NAME1",
  };
};

export const generateName2 = () => {
  return {
    type: "GENERATE_NAME2",
  };
};

export const save = () => {
  return {
    type: "SAVE",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const resetBank = () => {  
  return { 
    type: "RESET_BANK",
  };
};