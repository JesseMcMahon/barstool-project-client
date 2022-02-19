import "./App.css";
import Boxscore from "./components/boxscore/boxscore";
import Navigation from "./components/navigation/navigation";
import { React, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [selectedLeague, setSelectedLeague] = useState();

  useEffect(() => {
    const url = `http://localhost:5000/api/mlb`;
    axios({
      method: "get",
      withCredentials: true,
      url: url,
    }).then((res) => {
      setLeague(res);
    });
  }, []);
  const setLeague = (league) => {
    console.log(league);
    setSelectedLeague(league);
  };
  return (
    <div className="App">
      <Navigation setLeague={setLeague} />
      {selectedLeague ? <Boxscore league={selectedLeague} /> : null}
    </div>
  );
}

export default App;
