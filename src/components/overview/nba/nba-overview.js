import "./nba-overview.scss";

const NbaOverview = ({ league }) => {
  let stats = league.data;

  const awayPlayers = stats.away_stats.map((player, index) => {
    let abbreviatedName = player.first_name.slice(0, 1) + ".";
    return (
      <div className="player" key={index}>
        <div className="player-name">
          {abbreviatedName} {player.last_name}
          <span>{player.position}</span>
        </div>
        <div className="player-stats">
          <div>{player.minutes}</div>
          <div>
            {player.field_goals_made}-{player.field_goals_attempted}
          </div>
          <div>
            {player.three_point_field_goals_made}-
            {player.three_point_field_goals_attempted}
          </div>
          <div>
            {player.free_throws_made}-{player.free_throws_attempted}
          </div>
          <div>{player.offensive_rebounds}</div>
          <div>{player.defensive_rebounds}</div>
          <div>{player.assists}</div>
          <div>{player.steals}</div>
          <div>{player.blocks}</div>
          <div>{player.turnovers}</div>
          <div>{player.personal_fouls}</div>
          <div>{player.points}</div>
        </div>
      </div>
    );
  });

  const homePlayers = stats.home_stats.map((player, index) => {
    let abbreviatedName = player.first_name.slice(0, 1) + ".";
    return (
      <div className="player" key={index}>
        <div className="player-name">
          {abbreviatedName} {player.last_name}
          <span>{player.position}</span>
        </div>
        <div className="player-stats">
          <div>{player.minutes}</div>
          <div>
            {player.field_goals_made}-{player.field_goals_attempted}
          </div>
          <div>
            {player.three_point_field_goals_made}-
            {player.three_point_field_goals_attempted}
          </div>
          <div>
            {player.free_throws_made}-{player.free_throws_attempted}
          </div>
          <div>{player.offensive_rebounds}</div>
          <div>{player.defensive_rebounds}</div>
          <div>{player.assists}</div>
          <div>{player.steals}</div>
          <div>{player.blocks}</div>
          <div>{player.turnovers}</div>
          <div>{player.personal_fouls}</div>
          <div>{player.points}</div>
        </div>
      </div>
    );
  });
  return (
    <section className="nba-overview-container">
      <h3>Overview</h3>
      <div className="game-stats-container">
        <div className="team-container">
          <p className="away-name">{stats.away_team.full_name}</p>
          <div className="roster-container">
            <div className="header-container">
              <p>Players</p>
              <p className="first-stat">MIN</p>
              <p>FG</p>
              <p>3PT</p>
              <p>FT</p>
              <p>OREB</p>
              <p>REB</p>
              <p>AST</p>
              <p>STL</p>
              <p>BLK</p>
              <p>TO</p>
              <p>PF</p>
              <p>P</p>
            </div>
            {awayPlayers}
          </div>
        </div>
        <div className="team-container">
          <p>{stats.home_team.full_name}</p>
          <div className="header-container">
            <p>Batters</p>
            <p className="home-first-stat">MIN</p>
            <p>FG</p>
            <p>3PT</p>
            <p>FT</p>
            <p>OREB</p>
            <p>REB</p>
            <p>AST</p>
            <p>STL</p>
            <p>BLK</p>
            <p>TO</p>
            <p>PF</p>
            <p>P</p>
          </div>
          <div className="roster-container">{homePlayers}</div>
        </div>
      </div>
    </section>
  );
};

export default NbaOverview;
