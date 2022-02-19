import { React, useEffect } from "react";
import "./boxscore.scss";

const Boxscore = ({ league }) => {
  useEffect(() => {
    console.log(league);
  }, [league]);

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
        <div className="final-column">F</div>
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
        <div className="final-column">
          {league.data.league === "MLB"
            ? league.data.away_batter_totals.runs
            : null}
          {league.data.league === "NBA" ? league.data.away_totals.points : null}
        </div>
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
        <div className="final-column">
          {league.data.league === "MLB"
            ? league.data.home_batter_totals.runs
            : null}
          {league.data.league === "NBA" ? league.data.home_totals.points : null}
        </div>
      </div>
    </div>
  );
};

export default Boxscore;
