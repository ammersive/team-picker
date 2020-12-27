import BankRow from "./BankRow";
import { connect } from "react-redux";
import { pickPlayer } from "../../data/actions";

const mapStateToProps = state => {
  return {
    bank: state.bank,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      selectPlayer: ( player ) => dispatch(pickPlayer(player)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BankRow);
