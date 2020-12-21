// Action creators:
// Functions which return an action when called (from a component wrapper)

export const savePlayers = ({ players }) => {
  console.log(players);
  return {
    type: "SAVE_PLAYERS",
    players: players,
  };
};