import { connect } from "react-redux";
import Bank from "./Bank";

const mapStateToProps = state => {
  return {
    bank: state.bank,
    players: state.players,
  };
};

export default connect(mapStateToProps)(Bank);