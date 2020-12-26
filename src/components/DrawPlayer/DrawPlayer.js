const DrawPlayer = ({ pickedList, bank, clickDraw }) => (    
  <button onClick={
    // have to check pickedList.length not 0 to stop this warning firing when clearing the bank 
    (pickedList.length !== 0) && (pickedList.length === bank.length) ? 
    alert("That's the last player in the bank! You can add more players yourself, or create teams now") :
    clickDraw }
    disabled={ pickedList.length === bank.length }
  >
    Draw
  </button>
);
export default DrawPlayer;
