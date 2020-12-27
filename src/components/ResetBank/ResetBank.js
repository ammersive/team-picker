const ResetBank = ({ clickReset, buttonText }) => (
  // <button onClick={ clickReset } disabled={ bank === [] }>
  <button className="bank-clear" onClick={ clickReset }>
    {buttonText}
  </button>
);
export default ResetBank;