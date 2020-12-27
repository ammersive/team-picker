const Reset = ({ clickReset, buttonText, players }) => (
  players.length > 0 ?
  <button className="clear-players" onClick={ clickReset }>
  {buttonText}
  </button> :
  null  
);
export default Reset;