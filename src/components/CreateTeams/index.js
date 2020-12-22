import { connect } from "react-redux";
import CreateTeams from "./CreateTeams";
import { createTeams } from "../../data/actions";

const mapDispatchToProps = (dispatch) => { 
  return {    
    createClick: () => dispatch(createTeams())    
  };
};

export default connect(null, mapDispatchToProps)(CreateTeams);

