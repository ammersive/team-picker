import { Component } from "react";

class CreateTeams extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {    
    this.props.createClick();
  }

  render() {
    return(
      this.props.players.length > 0 ?
      <button onClick={ this.handleClick }>Create Teams</button> :
      null
    );
  }
}

export default CreateTeams;