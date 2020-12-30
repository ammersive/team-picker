const BankClearButton = ({ clickClearBank, buttonText }) => (
  <button className="bank-clear" onClick={ clickClearBank }>
    {buttonText}
  </button>
);
export default BankClearButton;