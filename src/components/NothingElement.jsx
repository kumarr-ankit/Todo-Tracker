import React from "react";
import "./Component.css";
import "../App.css";
import AddNewNote from "./AddNewNote";
import ModeBtn from "./ModeBtn";

function NothingElement() {
  return (
    <div className="empty-state-container" id="nothing_img">
      <div className="empty-card">
        <div className="empty-card-content">
          <h5 className="empty-card-title">Hey, Geek 🐳</h5>
          <p className="empty-card-text">
            Your dashboard is empty. Let's create your first note.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NothingElement;
