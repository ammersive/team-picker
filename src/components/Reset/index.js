import { connect } from "react-redux";
import Reset from "./Reset";
import { reset } from "../../data/actions";

const mapDispatchToProps = (dispatch) => { 
  return {
    clickReset: () => dispatch(reset())       
  };
};

export default connect(null, mapDispatchToProps)(Reset);