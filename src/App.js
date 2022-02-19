import "./App.css";
import MlbBoxscore from "./components/mlb-boxscore/mlb-boxscore";
import Navigation from "./components/navigation/navigation";
import { React, useState } from "react";

function App() {
  const [selectedLeague, setSelectedLeague] = useState();
  const setLeague = (league) => {
    console.log(league);
    setSelectedLeague(league);
  };
  return (
    <div className="App">
      <Navigation setLeague={setLeague} />
      <MlbBoxscore league={selectedLeague} />
    </div>
  );
}

export default App;
