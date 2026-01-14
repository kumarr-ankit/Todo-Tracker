import React from "react";
import "./Component.css";

function Navbar() {
  return (
    <div>
      {" "}
      {/* Navbar */}
      <nav id="navbar">
        <div id="header-container">
          <b id="app-name">Todo Tracker</b>
          <span id="app-det" className="app-bio">
            A simple todo app to manage day to day tasks/notes
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
