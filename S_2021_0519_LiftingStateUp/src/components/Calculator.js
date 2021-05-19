import React, { useState } from "react";

import BoilingVerdict from "./BoilingVerdict";

const Calculator = () => {
  const [temperature, setTemperature] = useState("");

  const handleChange = (e) => {
    setTemperature(Number(e.target.value));
  };

  return (
    <div>
      <label>
        温度を入力してください:
        <input type="number" value={temperature} onChange={handleChange} />
      </label>
      <BoilingVerdict celsius={temperature} />
    </div>
  );
};

export default Calculator;
