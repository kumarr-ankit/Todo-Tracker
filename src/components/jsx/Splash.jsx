import React from "react";
import "../css/Splash.css";
import loadingAnim from "../../assets/Loading.json";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
function Splash({ mode }) {
 
  let modeClass = mode == "true" ? "dark" : "";

 
  return (
    <div className={`splash-container ${modeClass}`}>
      <Player
        autoplay
        loop
        src={loadingAnim}
        className="loaderIcon"
        style={{ height: "100px", width: "100px" }}
      ></Player>

      <p className="splash-text">
        Loading.
        <span id="dot" className="splash-text dot">
          .
        </span>
      </p>
    </div>
  );
}

export default Splash;
