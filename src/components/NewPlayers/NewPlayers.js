import AddPlayer from "../AddPlayer";
import ListPlayers from "../ListPlayers/ListPlayers";
import CreateTeams from "../CreateTeams";
import Reset from "../Reset";

const NewPlayers = ({ players }) => (
  <>
    <AddPlayer />
    <ListPlayers players={ players }/>
    <p>{ players.length % 2 === 1 ? "Teams will be uneven..." : "Even teams, lovely!" }</p>    
    <CreateTeams />
    <Reset buttonText={ "Clear these players" }/>
  </>
);

export default NewPlayers;