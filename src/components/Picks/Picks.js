import PicksList from "../PicksList/PicksList";
import PicksCreateButton from "../PicksCreateButton";
import PicksClearButton from "../PicksClearButton";

const Picks = ({ players }) => (
  <div className="picks">    
    <h3>Picks</h3> 
    <PicksList players={ players }/> 
    <PicksCreateButton players={ players }/>
    <PicksClearButton players={ players } buttonText={ "Clear these players" }/>
  </div>
);

export default Picks;  