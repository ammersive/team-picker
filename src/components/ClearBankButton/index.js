import { connect } from "react-redux";
import ClearBankButton from "../ClearBankButton/ClearBankButton";
import { clearBank } from "../../data/actions";

const mapStateToProps = (state) => {
  return {
    bank: state.bank,
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    clickClearBank: () => dispatch(clearBank())       
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearBankButton);