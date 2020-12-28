import { connect } from "react-redux";
import ClearPickedPlayers from "./ClearPickedPlayers";
import { reset } from "../../data/actions";

const mapDispatchToProps = (dispatch) => { 
  return {
    clickReset: () => dispatch(reset())       
  };
};

export default connect(null, mapDispatchToProps)(ClearPickedPlayers);