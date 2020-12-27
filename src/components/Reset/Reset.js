const Reset = ({ clickReset, buttonText, players }) => (
  players.length > 0 ?
  <button className="players-reset" onClick={ clickReset }>
  {buttonText}
  </button> :
  null  
);
export default Reset;