import { connect } from "react-redux";
import Bank from "./Bank";

const mapStateToProps = state => {
  return {
    bank: state.bank,
  };
};

export default connect(mapStateToProps)(Bank);