import React from "react";

// const TemperatureInput = (props) => {
//   const [temperature, setTemperature] = useState(props.temperature);
//   const [scale, setScale] = useState(props.scale);

//   const scaleNames = {
//     c: "Celsius",
//     f: "Fahrenheit",
//   };

//   const handleCelsiusChange = (temperature, scale) => {
//     setTemperature(temperature);
//     setScale("c");
//   };

//   const handleChange = (e) => {
//     props.onTemperatureChange(e.target.value);
//   };

//   return (
//     <div>
//       <lebel>
//         温度[{scaleNames[scale]}]を入力してください :
//         <input type="number" value={temperature} onChange={handleChange} />
//       </lebel>
//     </div>
//   );
// };

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div>
        <label>
          {scaleNames[scale]}:
          <input
            value={temperature}
            onChange={this.handleChange}
            type="number"
          />
        </label>
      </div>
    );
  }
}

export default TemperatureInput;
