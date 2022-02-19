import { React, useEffect, useState } from "react";
import axios from "axios";
import "./mlb-boxscore.scss";

const MlbBoxscore = ({ league }) => {
  const [scoreboard, setScoreboard] = useState();
  const mlbScoreboardOptions = {
    innings: 9,
  };

  const nbaScoreboardOptions = {
    quarters: 4,
  };
  useEffect(() => {
    console.log(league);
    if (league) {
      homeBoxscore();
    }
  }, [league]);

  const homeBoxscore = () => {
    console.log(league.data.home_period_scores);
    league.data.home_period_scores.map((inning) => {
      return <div>{inning}</div>;
    });
  };

  return (
    <div className="scoreboard-container">
      <div className="period-container">
        {league
          ? league.data.away_period_scores.map((inning, index) => (
              <div className="period" key={index}>
                {index + 1}
              </div>
            ))
          : null}
      </div>
      <div className="home-container">
        <div className="team-name">
          {league ? league.data.away_team.abbreviation : null}
        </div>
        {league
          ? league.data.away_period_scores.map((inning, index) => (
              <div className="inning-container" key={index}>
                {inning}
              </div>
            ))
          : null}
      </div>
      <div className="away-container">
        <div className="team-name">
          {league ? league.data.home_team.abbreviation : null}
        </div>
        {league
          ? league.data.home_period_scores.map((inning, index) => (
              <div className="inning-container" key={index}>
                {inning}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default MlbBoxscore;
