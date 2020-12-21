import { connect } from "react-redux";

import AddPlayer from "./AddPlayer";

import { savePlayer } from "../../data/actions";

const mapStateToProps = state => {
  return {
    player: state.player
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSave: data => dispatch(savePlayer(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);