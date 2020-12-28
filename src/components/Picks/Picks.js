import ListPickedPlayers from "../ListPickedPlayers/ListPickedPlayers";
import CreateTeams from "../CreateTeams";
import ClearPickedPlayers from "../ClearPickedPlayers";

const Picks = ({ players }) => (
  <div className="picks">    
    <h3>Picks</h3> 
    <ListPickedPlayers players={ players }/> 
    <CreateTeams players={ players }/>
    <ClearPickedPlayers players={ players } buttonText={ "Clear these players" }/>
  </div>
);

export default Picks;  