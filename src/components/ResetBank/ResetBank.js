const ResetBank = ({ clickReset, buttonText, bank }) => (
  // <button onClick={ clickReset } disabled={ bank === [] }>
  <button onClick={ clickReset }>
    {buttonText}
  </button>
);
export default ResetBank;