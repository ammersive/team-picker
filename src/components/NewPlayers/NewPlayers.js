import AddPlayer from "../AddPlayer"
import ListPlayers from "../ListPlayers/ListPlayers"

const NewPlayers = ({ players }) => (
  <>
    <AddPlayer />
    <ListPlayers players={ players }/>
  </>
);

export default NewPlayers;