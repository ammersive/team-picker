import BankRow from "./BankRow";
import { connect } from "react-redux";
import { pickPlayer } from "../../data/actions";

const mapDispatchToProps = (dispatch) => {
    return {
      selectPlayer: ( player ) => dispatch(pickPlayer(player)),
    };
};

export default connect(null, mapDispatchToProps)(BankRow);
