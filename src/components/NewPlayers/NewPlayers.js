import AddPlayer from "../AddPlayer";
import ListPlayers from "../ListPlayers/ListPlayers";
import CreateTeams from "../CreateTeams";

const NewPlayers = ({ players }) => (
  <>
    <AddPlayer />
    <ListPlayers players={ players }/>
    <p>{ players.length % 2 === 1 ? "Teams will be uneven..." : "Even teams, lovely!" }</p>
    <CreateTeams />
  </>
);

export default NewPlayers;