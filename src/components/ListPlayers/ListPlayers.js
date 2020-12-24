const ListPlayers = ({ players }) => {
  let message = "";

  if ((players.length % 2 === 0) && (players.length > 0)) {
    message = `${players.length} players added. Even teams, great!`;
  }
  else if (players.length === 1) {
    message = `${players.length} player added. Teams will be uneven...`;
  }
  else if (players.length % 2 === 1) {
    message = `${players.length} players added. Teams will be uneven...`;
  }; 

  return ( 
    <>
      <ul className="players-list"> 
        { players.map((player, index) => (            
          <li className="player-list-item" key={ index }>{ player.name }</li> 
        )) } 
      </ul>
      <p className="message">{ message }</p>
    </>
  );
};

export default ListPlayers;