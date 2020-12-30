const About = () => (
  <section>
    <div className="overview-wrapper">
      <div className="about-box overview">
        <h3 className="about-subheading">Pick teams fairly, and plan a series of friendly games where everyone gets a turn.</h3>
        <h3 className="about-subheading"><i class="fas fa-futbol"></i></h3>
        <p className="about-text">Save Our Play is for groups who play a regular series of games, considering:</p>
        <ul>
          <li>Not everyone can play every week</li>  
          <li>More people may want to play than there is space on the team for (particularly acute for leagues who face current coronavirus restrictions on the numbers in which they can safely meet and practice.)</li>  
        </ul>        
      </div>
    </div>
    <div className="about-boxes">
      <div className="about-box">
        <h3 className="about-subheading"><i class="fas fa-volleyball-ball"></i> Player bank</h3>
        <p className="about-text">Save Our Play keeps track of the games assigned to each player in the play bank on <span className="button-span">Save</span>, to help you adjudicate who’s due a game in a situation where more people want to play than there’s space on the team.</p>
      </div>      
      <div className="about-box">
        <h3 className="about-subheading"><i class="fas fa-basketball-ball"></i> Draw by play-count</h3>
        <p className="about-text">Save Our Play’s <span className="button-span">Draw</span> feature automatically picks players with the lowest play-counts (if multiple players have the lowest count, the selection is randomised within this set). You can also pick players directly from the bank when you plan games, accounting for player availability. Any team size is supported.</p>
        
      </div>      
      <div className="about-box">
        <h3 className="about-subheading"><i class="far fa-futbol"></i> Randomise Teams</h3>
        <p className="about-text">Once you’re happy with your player selection, you can sort players into teams randomly with <span className="button-span">Create teams</span>. Randomise arrangements indefinitely with<span className="button-span">Reshuffle teams</span>.</p>
      </div>
      <div className="about-box">
        <h3 className="about-subheading"><i class="fas fa-futbol"></i> Team name generator</h3>
        <p className="about-text">Don’t take play too seriously? Save Our Play’s <span className="button-span">Generate team name</span> will give you a (near) endless supply of tongue-in-cheek triple-barrel names for each side.</p>
      </div>
      <div className="about-box">
        <h3 className="about-subheading">Version 1 information:</h3>
        <p className="about-text">Player information is currently stored for each browser session. <a href="https://github.com/ammersive/save-our-plays/" target="_blank" rel="noreferrer">Version 2</a> (in production) will soon allow you to save player data between sessions, powered by <a href="https://github.com/ammersive/tp-back/" target="_blank" rel="noreferrer">this API</a>.</p>
      </div>
    </div>
  </section>
);
export default About;