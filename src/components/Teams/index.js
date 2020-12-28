import { connect } from "react-redux";
import Teams from "./Teams";

const mapStateToProps = (state) => {
  return {
    players: state.players,
    team1Name: state.team1Name,
    team2Name: state.team2Name,
    playersChosen: state.playersChosen,
  };
};

export default connect(mapStateToProps)(Teams);