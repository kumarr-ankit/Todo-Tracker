import React from "react";
import "./Splash.css";
import loadingAnim from "./assets/Loading.json";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
function Splash() {


  return (
    <div className="splash-container">
      <Player
        autoplay
        loop
        src={loadingAnim}
        style={{ height: "100px", width: "100px" }}
      ></Player>

      <p className="splash-text">
         Loading...
        <span id="dot" className="splash-text dot">
          .
        </span>
      </p>
    </div>
  );
}

export default Splash;
