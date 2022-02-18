import "./App.css";
import Scoreboard from "./components/scoreboard/scoreboard";
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
      <Scoreboard league={selectedLeague} />
    </div>
  );
}

export default App;
