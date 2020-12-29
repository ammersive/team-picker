const PicksClearButton = ({ clickClearPickedPlayers, buttonText, players }) => (
  players.length > 0 ?
  <button className="clear-picked-players" onClick={ clickClearPickedPlayers }>
  {buttonText}
  </button> :
  null  
);
export default PicksClearButton;