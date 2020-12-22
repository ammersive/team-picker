import AddPlayer from "../AddPlayer";
import ListPlayers from "../ListPlayers/ListPlayers";
import CreateTeams from "../CreateTeams";

const NewPlayers = ({ players }) => (
  <>
    <AddPlayer />
    <ListPlayers players={ players }/>
    <CreateTeams />
  </>
);

export default NewPlayers;