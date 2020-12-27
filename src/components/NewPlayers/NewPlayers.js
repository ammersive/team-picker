import Bank from "../Bank";
import AddPlayer from "../AddPlayer";
import DrawPlayer from "../DrawPlayer";
import ListPlayers from "../ListPlayers/ListPlayers";
import CreateTeams from "../CreateTeams";
import Reset from "../Reset";
import ResetBank from "../ResetBank";

const NewPlayers = ({ players, bank, player }) => (
  
  <section className="wrapper players-wrapper">

    <header className="section-header">
      <h2>Select Players</h2>
    </header>

    <div className="players-content-wrapper">
    
      <div className="bank-wrapper">
        <div className="bank">
          <Bank bank={ bank } player={ player }/>
        </div>
      </div>


      <div className="draw-add-wrapper">          
        <div className="add-players">
          <h3>Draw</h3>
          <p>Draw players due a game</p>
          <DrawPlayer bank={ bank } />
          <ResetBank buttonText={ "Clear the bank" }/>          
        
        </div>
        <div className="add-players">
          <h3>Add new</h3>
          <p>Add new player</p>
          <AddPlayer />
        </div>
      </div>      

      <div className="players-list-wrapper">
      {/* put inside list when classname */}
        <h3>Picks</h3> 
        <ListPlayers players={ players }/>    
        <div className="create">
          <CreateTeams players={ players }/>
          <Reset players={ players } buttonText={ "Clear these players" }/>
        </div>
      </div>

    </div>

  </section>
);

export default NewPlayers;