// import GenerateName from "../GenerateName";
// import ListPlayers from "../ListPlayers/ListPlayers";
import Team1 from "../Team/Team1";
import Team2 from "../Team/Team2";

const Game = ({ players }) => (
  <>
    <h1>Game component:</h1>

    {/* for testing: */}
    {/* <ListPlayers players={ players }/>  */}

    <Team1 />
    <Team2 />    
  </>
);

export default Game;