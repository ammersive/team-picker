import BankAddButton from "../BankAddButton/";
import ClearBankButton from "../ClearBankButton/";

const Bank = ({ bank }) => {
  
  return (    
    <div className="bank">
      <h3>Player bank</h3> 
      {bank.length > 0 ? 
      <> 
        <h4>Number of previous plays</h4> 
        <ul>
          { bank.map((player, index) => (
            <li className={ player.isPicked === true ? "picked" : null }>
              <div className="player-cell">
                { player.name }
              </div>  
              <div className="play-count-cell">
                { player.playCount }
              </div> 
              <div className="bank-add-wrap">
                <BankAddButton index={ index } player={ player }/>
              </div>
            </li>   
          )) }
        </ul>
        <ClearBankButton buttonText={ "Clear the bank" }/>
      </>
      : <p className="no-players">Bank is empty</p> }      
    </div>    
  );
};

export default Bank;

// import { Component } from "react";
// import BankAddButton from "../BankAddButton/";

// class Bank extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
//       bank: props.bank,
// 		};
//   }
  
//   render() {    
//     console.log(this.state.bank, this.props.bank);
//     return (
//       <>
//         <h3>Player bank</h3> 
//         <ul>
//           { this.props.bank.map((player, index) => (
//             <li>
//             { player.name }  
//             { player.playCount } 
//             <BankAddButton index={ index } player={ player }/>
//             </li>   
//           )) }
//         </ul>        
//       </>
//     );
//   }

// }

// export default Bank;