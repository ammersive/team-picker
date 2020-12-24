const DrawPlayer = ({ picked, bank, clickDraw }) => (    
  <button onClick={
    // have to check picked.length not 0 to stop this warning firing when clearing the bank 
    (picked.length !== 0) && (picked.length === bank.length) ? 
    alert("That's the last player in the bank! You can add more players yourself, or create teams now") :
    clickDraw }
    disabled={ picked.length === bank.length }
  >
    Draw
  </button>
);
export default DrawPlayer;
