import React, { useEffect, useState } from "react";
import "./Component.css";
import { Camera, MoonStar, Sun } from "lucide-react";
function ModeBtn() {
  const [isDark, setIsDark] = useState(false);

  // Apply the theme attribute to the <html> tag
  useEffect(() => {
    setTimeout(() => {
      document.documentElement.setAttribute(
        "data-theme",
        isDark ? "dark" : "light"
      );
    }, 1);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  function changeMode() {
    toggleTheme();
  }
  return (
    <div onClick={changeMode}>
      {isDark ? (
        <Sun color="white" height={"14px"} className="icon" />
      ) : (
        <MoonStar color="black" height={"14px"} className="icon" />
      )}
      Change {isDark ? "light" : "dark"} mode{" "}
    </div>
  );
}

export default ModeBtn;
