const ClearPickedPlayers = ({ clickReset, buttonText, players }) => (
  players.length > 0 ?
  <button className="clear-picked-players" onClick={ clickReset }>
  {buttonText}
  </button> :
  null  
);
export default ClearPickedPlayers;