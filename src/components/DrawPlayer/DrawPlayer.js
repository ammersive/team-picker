const DrawPlayer = ({ picked, bank, clickDraw }) => (    
  <button onClick={ 
    picked.length === bank.length ?
    alert("That's the last player in the bank! You can add more players yourself, or create teams now") :
    clickDraw }
    disabled={ picked.length === bank.length }
  >
    Draw player from bank
  </button>
);
export default DrawPlayer;
