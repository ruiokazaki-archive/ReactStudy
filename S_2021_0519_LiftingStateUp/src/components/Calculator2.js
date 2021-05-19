import React, { useState } from "react";

import TemperatureInput from "./TemperatureInput";

const Calculator = (props) => {
  return (
    <div>
      <TemperatureInput scale="f" />
      <TemperatureInput scale="c" />
    </div>
  );
};

export default Calculator;
