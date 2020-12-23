const Team = ({ teamName, team, generateClick }) => {
  return (
    <>
      <h2>{ teamName }</h2>
      <button onClick={ generateClick }>Generate team name</button>
      <ul> 
        { team.map((player, index) => (            
          <li key={ index }>{ player.name }</li> 
        )) } 
      </ul>
    </>
  );
};

export default Team;