import { connect } from "react-redux";

import AddPlayers from "./AddPlayers";
// import action creator function
import { savePlayers } from "../../data/actions";

// mapStateToProps is called every time the store state changes, and receives the entire store state
// Used here to pass updated values to props, then passed to the specific instance of the component
const mapStateToProps = state => {
  return {
    players: state.players
  };
};

// Using mapDispatchToProps to create a function that dispatches when called, and which can be passed as a prop to the relevant component
const mapDispatchToProps = dispatch => {
  // pass handleSave an anon func that dispatches the saveSettings action creator func 
  // 'data' is copy of state, passed up from form on point of submit
  return {
    handleSave: data => dispatch(savePlayers(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayers);