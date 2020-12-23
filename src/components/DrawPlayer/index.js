import { connect } from "react-redux";
import DrawPlayer from "./DrawPlayer";
import { drawPlayer } from "../../data/actions";

const mapStateToProps = (state) => {
  return {
    bank: state.bank,
    picked: state.picked,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickDraw: () => dispatch(drawPlayer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawPlayer);