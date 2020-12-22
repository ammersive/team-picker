import { connect } from "react-redux";

import Team1 from "./Team";

const mapStateToProps = (state) => { 
  return {
    teamName: state.team1Name,
    team: state.team1,           
  };
};

export default connect(mapStateToProps)(Team1);