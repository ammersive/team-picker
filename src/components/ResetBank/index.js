import { connect } from "react-redux";
import ResetBank from "../ResetBank/ResetBank";
import { resetBank } from "../../data/actions";

const mapStateToProps = (state) => {
  return {
    bank: state.bank,
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    clickReset: () => dispatch(resetBank())       
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetBank);