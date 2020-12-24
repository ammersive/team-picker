const Reset = ({ clickReset, buttonText }) => (
  <button className="clear-players" onClick={ clickReset }>
    {buttonText}
  </button>
);
export default Reset;