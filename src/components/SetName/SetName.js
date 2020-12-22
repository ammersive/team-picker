import { Component } from "react";

class SetName extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {    
    this.props.generateClick();
  }

  render() {
    return(
      <button onClick={ this.handleClick }>Generate team name</button>
    );
  }
}

export default SetName;