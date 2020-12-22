const ListPlayers = ({ players }) => {
  let message = "";

  if ((players.length % 2 === 0) && (players.length > 0)) {
    message = "Even teams, great!";
  }
  else if (players.length % 2 === 1) {
    message = "Teams will be uneven...";
  }; 

  return (
    <>
      <ul> 
        { players.map((element, index) => (            
          <li key={ index }>{ element }</li> 
        )) } 
      </ul>
      <p> { message }</p>
    </>
  );
};

export default ListPlayers;