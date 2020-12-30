import Bank from "../Bank";
import AddPlayer from "../AddPlayer";
import DrawPlayer from "../DrawPlayer";
import Picks from "../Picks/";

const NewPlayers = ({ players, bank, player, playersChosen }) => (
  
  !playersChosen ?

  <section className="section-wrapper players-wrapper">
    <header className="section-header">
      <h2><i class="fas fa-futbol"></i> Select Players</h2>
    </header>
    <div className="players-content-wrapper">    
      <div className="bank-wrapper">        
        <Bank bank={ bank } player={ player }/>       
      </div>
      <div className="draw-add-wrapper"> 
        <DrawPlayer bank={ bank } /> 
        <AddPlayer bank={ bank } players={ players }/>
      </div> 
      <div className="picks-wrapper">
        <Picks />
      </div>
    </div>
  </section>

  : null
);

export default NewPlayers;