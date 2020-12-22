import { connect } from "react-redux";

import Team2 from "./Team";

const mapStateToProps = (state) => { 
  return {
    teamName: state.team2Name,
    team: state.team2,           
  };
};

export default connect(mapStateToProps)(Team2);