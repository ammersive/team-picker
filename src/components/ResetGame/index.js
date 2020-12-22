import { connect } from "react-redux";
import ResetGame from "./ResetGame";
import { reset } from "../../data/actions";

const mapDispatchToProps = (dispatch) => { 
  return {
    clickReset: () => dispatch(reset())       
  };
};

export default connect(null, mapDispatchToProps)(ResetGame);