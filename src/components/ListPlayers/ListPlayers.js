const ListPlayers = ({ players }) => {
  return (
      <ul> 
        { players.map((element, index) => (            
          <li key={ index }>{ element }</li> 
        )) } 
      </ul>
    );
};

export default ListPlayers;