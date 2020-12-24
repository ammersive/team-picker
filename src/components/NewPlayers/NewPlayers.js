import Bank from "../Bank/Bank";
import AddPlayer from "../AddPlayer";
import DrawPlayer from "../DrawPlayer";
import ListPlayers from "../ListPlayers/ListPlayers";
import CreateTeams from "../CreateTeams";
import Reset from "../Reset";
import ResetBank from "../ResetBank";

const NewPlayers = ({ players, picked, bank }) => (
  <section className="wrapper players-wrapper">
    <header className="section-header">
      <h2>Select Players</h2>
    </header>
    <div className="bank">
      <Bank bank={ bank } />
    </div>
    <div className="draw-add-wrap">
      <div className="add-players">
        <h3>Draw</h3>
        <p>Draw players due a game</p>
        <DrawPlayer picked={ picked } bank={ bank } />
        <ResetBank buttonText={ "Clear the bank" }/>
      </div>
      <div className="add-players">
        <h3>Choose</h3>
        <p>Enter chosen or new player</p>
        <AddPlayer />
      </div>
    </div>
    <div className="players-list">
    {/* put inside list when classname */}
      <h3>Picks</h3> 
      <ListPlayers players={ players }/>
    </div>
    <div className="create">
      <CreateTeams />
      <Reset buttonText={ "Clear these players" }/>
    </div>
  </section>
);

export default NewPlayers;