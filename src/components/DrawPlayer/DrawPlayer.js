// disabled={ bank.length === players.length } // this is wrong, the logic is "Is players length equal to bank length, AND everyone in players isn't new?"
const DrawPlayer = ({ clickDraw }) => (
  <div className="draw-add-players">
    <h3>Draw</h3>
    <p>Draw players due a game</p>    
    <button className="draw-button" onClick={ clickDraw }>Draw</button>
  </div>
);
export default DrawPlayer;
