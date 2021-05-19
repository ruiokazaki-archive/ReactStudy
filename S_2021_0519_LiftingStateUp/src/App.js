import React from "react";

import BoilingVerdict from "./components/BoilingVerdict";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <div>
      <BoilingVerdict celsius="100" />
      <hr />
      <Calculator />
    </div>
  );
};

export default App;
