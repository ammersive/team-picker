const Bank = ({ bank }) => {
  return (
    <>
      <h3>Bank of players</h3>    
      <ul> 
        { bank.map((player, index) => (            
          <li key={ index }>{ player.name} playcount: {player.playCount }</li> 
        )) } 
      </ul>
    </>
  );
};

export default Bank;