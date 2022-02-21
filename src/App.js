import "./App.css";
import Boxscore from "./components/boxscore/boxscore";
import Navigation from "./components/navigation/navigation";
import GameSummary from "./components/game-summary/game-summary";
import MlbOverview from "./components/overview/mlb/mlb-overview";
import NbaOverview from "./components/overview/nba/nba-overview";
import { React, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [selectedLeague, setSelectedLeague] = useState();

  useEffect(() => {
    const url = `http://localhost:5000/api`;
    axios({
      method: "post",
      data: {
        currentTime: Date.now(),
        league: "mlb",
      },
      withCredentials: true,
      url: url,
    }).then((res) => {
      setLeague(res);
    });
  }, []);
  const setLeague = (league) => {
    setSelectedLeague(league);
  };

  return (
    <div className="app">
      {selectedLeague ? (
        <>
          <Navigation setLeague={setLeague} selectedLeague={selectedLeague} />
          <GameSummary league={selectedLeague} />
          <Boxscore league={selectedLeague} />
          {selectedLeague.data.league === "MLB" ? (
            <MlbOverview league={selectedLeague} />
          ) : (
            <NbaOverview league={selectedLeague} />
          )}
        </>
      ) : null}
    </div>
  );
}

export default App;
