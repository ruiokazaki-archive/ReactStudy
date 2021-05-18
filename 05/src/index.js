import React from "react";
import ReactDOM from "react-dom";

function Test(props) {
  return <h1>{props.text}</h1>;
}

ReactDOM.render(<Test text="test" />, document.getElementById("root"));
