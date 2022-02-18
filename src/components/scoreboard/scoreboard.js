import { React, useEffect } from "react";
import axios from "axios";
import "./scoreboard.scss";

const Scoreboard = ({ league }) => {
  // useEffect(() => {
  //   console.log("running");
  //   axios({
  //     method: "get",
  //     withCredentials: true,
  //     url: "http://localhost:5000/api",
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // }, []);
  console.log(league);
  return (
    <div className="scoreboard-container">
      <div className="home-container">
        <div className="team-name">
          {league ? league.data.away_team.abbreviation : null}
        </div>
      </div>
      <div className="away-container">
        <div className="team-name">
          {league ? league.data.home_team.abbreviation : null}
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
