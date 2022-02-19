import React from "react";
import "./mlb-overview.scss";

const MlbOverview = ({ league }) => {
  let stats = league.data;

  const awayPlayers = stats.away_batters.map((player, index) => {
    let abbreviatedName = player.first_name.slice(0, 1) + ".";
    return (
      <div className="batter" key={index}>
        <div className="player-name">
          {abbreviatedName} {player.last_name}
        </div>
        <div className="player-stats">
          <div>{player.at_bats}</div>
          <div>{player.runs}</div>
          <div>{player.hits}</div>
          <div>{player.rbi}</div>
          <div>{player.walks}</div>
          <div>{player.avg}</div>
        </div>
      </div>
    );
  });

  const homePlayers = stats.home_batters.map((player, index) => {
    let abbreviatedName = player.first_name.slice(0, 1) + ".";
    return (
      <div className="batter" key={index}>
        <div className="player-name">
          {abbreviatedName} {player.last_name}
        </div>
        <div className="player-stats">
          <div>{player.at_bats}</div>
          <div>{player.runs}</div>
          <div>{player.hits}</div>
          <div>{player.rbi}</div>
          <div>{player.walks}</div>
          <div>{player.avg}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="overview-container">
      <h3>Overview</h3>
      <div className="game-stats-container">
        <div className="team-container">
          <p>{stats.away_team.full_name}</p>
          <div className="roster-container">
            <div className="header-container">
              <p>Batters</p>
              <p className="first-stat">AB</p>
              <p>R</p>
              <p>H</p>
              <p>RBI</p>
              <p>BB</p>
              <p>AVG</p>
            </div>
            {awayPlayers}
          </div>
        </div>
        <div className="team-container">
          <p>{stats.home_team.full_name}</p>
          <div className="header-container">
            <p>Batters</p>
            <p className="home-first-stat">AB</p>
            <p>R</p>
            <p>H</p>
            <p>RBI</p>
            <p>BB</p>
            <p>AVG</p>
          </div>
          <div className="roster-container">{homePlayers}</div>
        </div>
      </div>
    </div>
  );
};

export default MlbOverview;
