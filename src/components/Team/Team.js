const Team = ({ teamName, team, generateClick }) => {
  return (
    <>
      <h3 className="team-name">{ teamName }</h3>
      <button className="generate" onClick={ generateClick }>Generate team name</button>
      <ul className="team-list"> 
        { team.map((player, index) => (            
          <li className="team-member" key={ index }>{ player.name }</li> 
        )) } 
      </ul>
    </>
  );
};

export default Team;