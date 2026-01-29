import React from "react";
import ModeBtn from "./ModeBtn";
import AddNewNote from "./AddNewNote";
import githublogo from "/github.svg";
import {
  ExternalLink,
  Forward,
  GitBranch,
  Github,
  GithubIcon,
  PersonStanding,
  User,
} from "lucide-react";

function Footer({ showForm, setShowFrom }) {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-left">
          <p>
           
            <span className="developer">
              © {new Date().getFullYear()} Todo Tracker <span className="divider">|</span>
              <img src={githublogo} alt="github logo" />
              <span><a href="https://github.com/kumarr-ankit/Todo-Tracker">@github.com/Todo-Tracker <ExternalLink className="external" size={'12px'}  />  </a></span>
            </span>
          </p>
        </div>

        <div className="footer-actions">
          <AddNewNote showForm={showForm} setShowFrom={setShowFrom} />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
