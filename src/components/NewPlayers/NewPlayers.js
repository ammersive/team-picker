import Bank from "../Bank";
import AddPlayer from "../AddPlayer";
import DrawPlayer from "../DrawPlayer";
import ListPickedPlayers from "../ListPickedPlayers/ListPickedPlayers";
import CreateTeams from "../CreateTeams";
import Reset from "../Reset";
// import ResetBank from "../ResetBank";

const NewPlayers = ({ players, bank, player, playersChosen }) => (
  
  !playersChosen ?

  <section className="section-wrapper players-wrapper">

    <header className="section-header">
      <h2>Select Players</h2>
    </header>

    <div className="players-content-wrapper">
    
      <div className="bank-wrapper">        
          <Bank bank={ bank } player={ player }/>        
      </div>


      <div className="draw-add-wrapper"> 
          <DrawPlayer bank={ bank } /> 
          <AddPlayer bank={ bank } players={ players }/>
      </div>      

      <div className="players-list-wrapper">
      {/* put inside list when classname */}
        <h3>Picks</h3> 
        <ListPickedPlayers players={ players }/>    
        <div className="create">
          <CreateTeams players={ players }/>
          <Reset players={ players } buttonText={ "Clear these players" }/>
        </div>
      </div>

    </div>

  </section>

  : null
);

export default NewPlayers;