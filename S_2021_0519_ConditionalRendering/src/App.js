import React, { useState } from "react";

import Greeting from "./components/Greeting";
import LoginControl from "./components/LoginControl";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      <button onClick={toggle}>toggle</button>
      <hr />
      <LoginControl />
    </div>
  );
};

export default App;
