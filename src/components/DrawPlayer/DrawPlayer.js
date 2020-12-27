// disabled={ bank.length === players.length } // this is wrong, the logic is "Is players length equal to bank length, AND everyone in players isn't new?"
const DrawPlayer = ({ clickDraw }) => (    
  <button className="draw-players" onClick={ clickDraw }>Draw</button>
);
export default DrawPlayer;
