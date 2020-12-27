import { Component } from "react";
import BankRow from "../BankRow/";

class Bank extends Component {
	constructor(props) {
		super(props);
		this.state = {
      bank: props.bank,
		};
  }
  
  render() {    
    console.log(this.state.bank, this.props.bank);
    return (
      <>
        <h3>Player bank</h3> 
        <ul>
          { this.props.bank.map((player, index) => (
            <li>
            { player.name }  
            { player.playCount } 
            <BankRow index={ index } player={ player }/>
            </li>   
          )) }
        </ul>        
      </>
    );
  }

}

export default Bank;




// import BankRow from "../BankRow/";

// const Bank = ({ bank }) => {
//   console.log(bank);
//   return (
//     <>
//       <h3>Player bank</h3> 
//       <ul>
//         { bank.map((player, index) => (    
//           // <BankRow index={ index } player={ player }/>   
//           <BankRow key={ index } player={ player }/>   
//         )) }
//       </ul>        
//     </>
//   );
// };

// export default Bank;