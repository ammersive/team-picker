// Action creators:
// Functions which return an action when called (from a component wrapper)

export const savePlayer = ({ player }) => {
  return {
    type: "SAVE_PLAYER",
    player: player,
  };
};