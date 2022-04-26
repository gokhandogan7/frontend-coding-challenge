import React from "react";

export const HomePage = () => {
  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: 10,
        backgroundColor: "#f1f1f1",
        height: "97vh",
      }}
    >
      <div
        style={{ padding: 30, textAlign: "center", backgroundColor: "#fca138" }}
      >
        <h1 style={{ color:'white',fontSize: 50 }}>Absence Manager</h1>
        <p>Stundenzettel und Schichtplanung digitalisieren.</p>
      </div>

      <div style={{overflow: "hidden", backgroundColor: "#333" }}>
        <a
          style={{
            display: "block",
            color: "#f2f2f2",
            textAlign: "center",
            padding: 14,
            textDecoration: "none",
          }}
          href="/absence"
        >
          Absence Table
        </a>
      </div>
    </div>
  );
};
