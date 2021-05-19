import React, { useState } from "react";

const TemperatureInput = (props) => {
  const [temperature, setTemperature] = useState("");

  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };

  const handleChange = (e) => {
    setTemperature(Number(e.target.value));
  };

  return (
    <div>
      <lebel>
        温度[{scaleNames[props.scale]}]を入力してください :
        <input type="number" value={temperature} onChange={handleChange} />
      </lebel>
    </div>
  );
};

export default TemperatureInput;
