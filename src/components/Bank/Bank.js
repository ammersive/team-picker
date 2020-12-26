import { Component } from "react";
import BankRow from "../BankRow/";

class Bank extends Component {
	constructor(props) {
		super(props);
		this.state = {
      bank: props.bank
		};
  }

  render() {
    return (
      <>
        <h3>Player bank</h3> 
        <ul>
          { this.state.bank.map((player, index) => (    
            <BankRow index={ index } player={ player }/>   
          )) }
        </ul>        
      </>
    );
  }

}

export default Bank;