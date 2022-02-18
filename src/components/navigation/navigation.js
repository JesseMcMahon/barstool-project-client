import React from "react";
import axios from "axios";
import "./navigation.scss";

const Navigation = () => {
  const getStats = async (e) => {
    const url = `http://localhost:5000/api/${e.target.id}`;
    await axios({
      method: "get",
      withCredentials: true,
      url: url,
    }).then((res) => {
      console.log(res);
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
