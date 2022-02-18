import { React, useEffect } from "react";
import axios from "axios";
import "./scoreboard.scss";

const Scoreboard = () => {
  useEffect(() => {
    console.log("running");
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/api",
    }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className="scoreboard-container">
      <div className="home-container">
        <div className="team-name">NYY</div>
      </div>
      <div className="away-container">
        <div className="team-name">CHC</div>
      </div>
    </div>
  );
};

export default Scoreboard;
