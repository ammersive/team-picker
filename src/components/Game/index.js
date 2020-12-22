import { connect } from "react-redux";
import Game from "./Game";

const mapStateToProps = (state) => {
  return {
    players: state.players,
    team1Name: state.team1Name,
    team2Name: state.team2Name,
  };
};

export default connect(mapStateToProps)(Game);