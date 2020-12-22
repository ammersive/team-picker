const Team = ({ teamName, team, generateClick }) => {
  return (
    <>
      <h2>{ teamName }</h2>
      <button onClick={ generateClick }>Generate team name</button>
      <ul> 
        { team.map((element, index) => (            
          <li key={ index }>{ element }</li> 
        )) } 
      </ul>
    </>
  );
};

export default Team;