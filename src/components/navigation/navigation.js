import { React, useState } from "react";
import axios from "axios";
import "./navigation.scss";

const Navigation = ({ setLeague }) => {
  const getStats = async (e) => {
    const league = e.target.id;
    const url = `http://localhost:5000/api/${e.target.id}`;
    await axios({
      method: "post",
      data: {
        currentTime: Date.now(),
        league: league,
      },
      withCredentials: true,
      url: url,
    }).then((res) => {
      setLeague(res);
    });
  };

  return (
    <div className="nav-container">
      <div>
        <button id="nba" onClick={getStats}>
          NBA
        </button>
        <button id="mlb" onClick={getStats}>
          MLB
        </button>
      </div>
      <div>
        <p>Barstool Sports Network</p>
      </div>
    </div>
  );
};

export default Navigation;
