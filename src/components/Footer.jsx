import React from "react";
import ModeBtn from "./ModeBtn";
import AddNewNote from "./AddNewNote";

function Footer({ showForm, setShowFrom }) {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Todo Tracker</p>
          <div id="feedback-res" className="status-message">
            <span>Successfully deleted</span>
            <img
              src="../src/assets/success.svg"
              alt="success"
              className="status-icon"
            />
          </div>
        </div>

        <div className="footer-actions">
        
          <AddNewNote showForm={showForm} setShowFrom={setShowFrom} />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
