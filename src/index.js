import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const name = "ruru";

// function formatName(name) {
//   if (name) {
//     return name + " san";
//   }
// }

// function getGreeting(user) {
//   if (user) {
//     return (
//       <div>
//         <h1>Hello, {formatName(user)}!</h1>
//         <h2>Good to see you here.</h2>
//       </div>
//     );
//   }
//   return <h1>Hello, Null san.</h1>;
// }

// const element = <h1>Hello, {name}!</h1>;
// const element = <h1>Hello, {formatName(name)}!</h1>;
// ReactDOM.render(getGreeting("ruru"), document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>what time is it</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
