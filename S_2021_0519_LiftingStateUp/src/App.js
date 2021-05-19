import React from "react";

import BoilingVerdict from "./components/BoilingVerdict";
import Calculator from "./components/Calculator";
import Calculator2 from "./components/Calculator2";

const App = () => {
  return (
    <div>
      <BoilingVerdict celsius="100" />
      <hr />
      <Calculator />
      <hr />
      <Calculator2 />
    </div>
  );
};

export default App;
