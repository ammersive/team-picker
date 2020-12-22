import { connect } from "react-redux";
import NewPlayers from "./NewPlayers";

const mapStateToProps = (state) => {

  return {
    players: state.players,
  };
};

export default connect(mapStateToProps)(NewPlayers);