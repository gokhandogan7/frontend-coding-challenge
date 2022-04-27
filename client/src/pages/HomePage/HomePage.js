import "./home.css";
import React from "react";

export const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <div className="contentContainer">
        <h1 className="header">Absence Manager</h1>
        <p className="motto">
          Stundenzettel und Schichtplanung digitalisieren.
        </p>
      </div>

      <div className="linkContainer">
        <a className="link" href="/absence">
          Absence Table
        </a>
      </div>
    </div>
  );
};
