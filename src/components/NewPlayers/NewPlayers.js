import Bank from "../Bank/Bank";
import AddPlayer from "../AddPlayer";
import DrawPlayer from "../DrawPlayer";
import ListPlayers from "../ListPlayers/ListPlayers";
import CreateTeams from "../CreateTeams";
import Reset from "../Reset";
import ResetBank from "../ResetBank";

const NewPlayers = ({ players, picked, bank }) => (
  <>
    <Bank bank={ bank } />
    <ResetBank buttonText={ "Clear the bank" }/>
    <DrawPlayer picked={ picked } bank={ bank } />
    <AddPlayer />
    <ListPlayers players={ players }/>
    <CreateTeams />
    <Reset buttonText={ "Clear these players" }/>
  </>
);

export default NewPlayers;