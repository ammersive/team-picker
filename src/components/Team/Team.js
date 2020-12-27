const Team = ({ teamName, team, generateClick }) => {
  return (
    <div className="team-wrapper">
      <h3 className="team-name">{ teamName }</h3>
      <button className="generate" onClick={ generateClick }>
        {teamName.substring(0 , 4) === "Team" ? "Generate team name" : "New name"}
      </button>
      <ul className="team-list"> 
        { team.map((player, index) => (            
          <li className="team-member" key={ index }>{ player.name }</li> 
        )) } 
      </ul>
    </div>
  );
};

export default Team;