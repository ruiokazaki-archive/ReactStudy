import React from "react";
import ReactDOM from "react-dom";

function Btn() {
  return <button onClick={() => alert("clickされました")}>alert btn</button>;
}

// const App = (
//   <div>
//     <h1>Event</h1>
//     <Btn />
//   </div>
// );
ReactDOM.render(<Btn />, document.getElementById("root"));
