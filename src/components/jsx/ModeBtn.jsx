import React, { useEffect, useState } from "react";
import "../css/Component.css";
import { Camera, MoonStar, Sun } from "lucide-react";
function ModeBtn() {
  const [isDark, setIsDark] = useState(localStorage.getItem("mode")==='true');

  // Apply the theme attribute to the <html> tag
  useEffect(() => {
    setTimeout(() => {
      document.documentElement.setAttribute(
        "data-theme",
        isDark ? "dark" : "light"
      );
    }, 1);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((p) => {
    
     localStorage.setItem("mode", !p);
     return !p;
    });
   
  };

  function changeMode() {
    toggleTheme();
  }
  return (
    <div className="modeBtn" onClick={changeMode}>
      {isDark ? (
        <Sun color="white" height={"18px"} className="icon" />
      ) : (
        <MoonStar color="black" height={"18px"} className="icon" />
      )}
      {/* Change {isDark ? "light" : "dark"} mode{" "} */}
    </div>
  );
}

export default ModeBtn;
