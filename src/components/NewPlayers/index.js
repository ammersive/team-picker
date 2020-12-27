import { connect } from "react-redux";
import NewPlayers from "./NewPlayers";

const mapStateToProps = (state) => {
  return {
    bank: state.bank,
    players: state.players,
    playersChosen: state.playersChosen,
  };
};

export default connect(mapStateToProps)(NewPlayers);