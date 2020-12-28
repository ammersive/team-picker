import { connect } from "react-redux";
import ClearPickedPlayers from "./ClearPickedPlayers";
import { clearPickedPlayers } from "../../data/actions";

const mapDispatchToProps = (dispatch) => { 
  return {
    clickClearPickedPlayers: () => dispatch(clearPickedPlayers())       
  };
};

export default connect(null, mapDispatchToProps)(ClearPickedPlayers);