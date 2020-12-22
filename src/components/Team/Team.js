const Team = ({ teamName, team }) => {
  return (
    <>
      <h2>{ teamName }</h2>
      <ul> 
        { team.map((element, index) => (            
          <li key={ index }>{ element }</li> 
        )) } 
      </ul>
    </>
  );
};

export default Team;