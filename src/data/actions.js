// Action creators:
// Functions which return an action when called (from a component wrapper)

export const addPlayer = ({ player }) => {
  return {
    type: "ADD_PLAYER",
    player: player,
  };
};

export const createTeams = () => {
  return {
    type: "CREATE_TEAMS",
  };
};