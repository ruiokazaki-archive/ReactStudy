import React from "react";
import ReactDOM from "react-dom";

// function Test(props) {
//   return <h1>{props.text}</h1>;
// }

// function tick() {
//   const App = <p>{new Date().toLocaleTimeString()}</p>;
//   ReactDOM.render(App, document.getElementById("root"));
// }

// setInterval(tick, 1000);

// function Clock(props) {
//   return <p>{props.date.toLocaleTimeString()}</p>;
// }
// function tick() {
//   ReactDOM.render(<Clock />, document.getElementById("root"));
// }

function FormatedDate(props) {
  return <p>{props.date.toLocaleTimeString()}</p>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
    // setState()
    // Stateを新しい値に変更する。

    // this.state.date = new Date();
    // stateを直接変更すると再レンダリングされない
  }

  render() {
    return <FormatedDate date={this.state.date} />;
  }
}

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
