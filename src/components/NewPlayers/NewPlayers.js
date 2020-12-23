import Bank from "../Bank/Bank";
import AddPlayer from "../AddPlayer";
import DrawPlayer from "../DrawPlayer";
import ListPlayers from "../ListPlayers/ListPlayers";
import CreateTeams from "../CreateTeams";
import Reset from "../Reset";

const NewPlayers = ({ players, picked, bank }) => (
  <>
    <Bank bank={ bank } />
    <AddPlayer />
    <DrawPlayer picked={ picked } bank={ bank } />
    <ListPlayers players={ players }/>
    <CreateTeams />
    <Reset buttonText={ "Clear these players" }/>
  </>
);

export default NewPlayers;