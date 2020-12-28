import { connect } from "react-redux";
import Picks from "./Picks";

const mapStateToProps = (state) => {
  return {
    players: state.players,
  };
};

export default connect(mapStateToProps)(Picks);