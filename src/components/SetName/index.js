import { connect } from "react-redux";
import SetName from "./SetName";
import { generateName } from "../../data/actions";

const mapDispatchToProps = (dispatch) => {
  return {    
    generateClick: () => dispatch(generateName())    
  };
};

export default connect(null, mapDispatchToProps)(SetName);