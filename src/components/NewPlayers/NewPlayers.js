import AddPlayer from "../AddPlayer";
import ListPlayers from "../ListPlayers/ListPlayers";
import CreateTeams from "../CreateTeams";
import Reset from "../Reset";

const NewPlayers = ({ players }) => (
  <>
    <AddPlayer />
    <ListPlayers players={ players }/>
    <CreateTeams />
    <Reset buttonText={ "Clear these players" }/>
  </>
);

export default NewPlayers;