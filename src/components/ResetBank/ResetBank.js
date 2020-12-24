const ResetBank = ({ clickReset, buttonText, bank }) => (
  // <button onClick={ clickReset } disabled={ bank === [] }>
  <button className="clear-bank" onClick={ clickReset }>
    {buttonText}
  </button>
);
export default ResetBank;