import "./game-summary.scss";

const GameSummary = ({ league }) => {
  return (
    <section className="game-summary-container">
      <div className="game-status">Final</div>
      <div className="game-details">
        <div className="away-section">
          <h2>{league.data.away_team.full_name}</h2>
          <h1>
            {league.data.league === "MLB"
              ? league.data.away_batter_totals.runs
              : null}
            {league.data.league === "NBA"
              ? league.data.away_totals.points
              : null}
          </h1>
        </div>
        <div className="home-section">
          <h2>{league.data.home_team.full_name}</h2>
          <h1>
            {league.data.league === "MLB"
              ? league.data.home_batter_totals.runs
              : null}
            {league.data.league === "NBA"
              ? league.data.home_totals.points
              : null}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default GameSummary;
