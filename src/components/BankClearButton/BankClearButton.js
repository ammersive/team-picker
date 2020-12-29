const BankClearButton = ({ clickClearBank, buttonText }) => (
  // <button onClick={ clickReset } disabled={ bank === [] }>
  <button className="bank-clear" onClick={ clickClearBank }>
    {buttonText}
  </button>
);
export default BankClearButton;