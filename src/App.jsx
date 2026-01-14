import "./App.css";

import MainApp from "./MainApp";
import Splash from "./Splash";
import { useState } from "react";

function App() {
  const [splash, setSplash] = useState(true);

  setTimeout(() => {
    setSplash(false);
  }, 2000);

  return splash ? <Splash /> : <MainApp />;
}

export default App;
