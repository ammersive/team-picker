const DrawPlayer = ({ clickDraw }) => (
  <div className="draw-add-players">
    <h3>Draw</h3>
    <p>Draw players due a game</p>    
    <button className="draw-button" onClick={ clickDraw }>Draw</button>
  </div>
);
export default DrawPlayer;
