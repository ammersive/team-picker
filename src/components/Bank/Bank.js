const Bank = ({ bank }) => {
  return (
    <>
      <h3>Player bank</h3> 
      <table>
        <thead>
          <tr>
              <th colspan="2">Playcounts</th>
          </tr>
        </thead>
        <tbody>
          { bank.map((player, index) => (
            <tr>            
              <td key={ index }>{ player.name} </td>
              <td key={ index }> {player.playCount }</td>
            </tr> 
          )) } 
        </tbody>   
      </table>
    </>
  );
};

export default Bank;