// import GenerateName from "../GenerateName";
import Team1 from "../Team/Team1";
import Team2 from "../Team/Team2";
import Reshuffle from "../Reshuffle/";
import Reset from "../Reset/";

const Game = () => (
  <>
    <h1>Game component:</h1>
    <Team1 />
    <Reshuffle />
    <Team2 />
    <Reset buttonText={ "Reset Game" }/>    
  </>
);

export default Game;