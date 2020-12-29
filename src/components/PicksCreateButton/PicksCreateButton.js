import { Component } from "react";

class PicksCreateButton extends Component {
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
      <button className="create-button" onClick={ this.handleClick }>Create Teams</button> :
      <p className="no-players">No players picked yet</p> 
    );
  }
}

export default PicksCreateButton;