
import "./App.css";

import MainApp from "./MainApp.jsx";
import Splash from "./components/jsx/Splash.jsx";
import { useState } from "react";

function App() {
  let mode = localStorage.getItem('mode');
 

  const [splash, setSplash] = useState(true);

  setTimeout(() => {
    setSplash(false);
  }, 2000);

  return splash ? <Splash mode={mode} /> : <MainApp />;

}

export default App;
