// import './App.css';
import Header from "./components/Header";
import AddPlayer from "./components/AddPlayer";
import NewPlayers from "./components/NewPlayers";

const App = ({ players }) => (
  <>
      <Header>Heading</Header>
      <AddPlayer />
      <NewPlayers />
  </>
);

export default App;
