import Header from "./components/Header";
import NewPlayers from "./components/NewPlayers";
import Game from "./components/Game";

const App = ({ players }) => (
  <>
    <Header>Heading</Header>
    <NewPlayers />
    <Game />
  </>
);

export default App;
