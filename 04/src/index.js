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

// function tick() {
//   const element = (
//     <div>
//       <h1>what time is it</h1>
//       <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);

// function Welcome(props) {
//   return <h1>{props.name}</h1>;
// }
// コンポーネント名は常に大文字で始める。
// const element = <Welcome name="ruru" />;

// function App() {
//   return (
//     <div>
//       <Welcome name="morikawa"></Welcome>
//       <Welcome name="okazaki"></Welcome>
//       <Welcome name="tanaka"></Welcome>
//       <Welcome name="kobayashi"></Welcome>
//       <Welcome name="wakitani"></Welcome>
//     </div>
//   );
// }

// function App() {
//   return <Comment />;
// }
// function Avatar(props) {
//   <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />;
// }
// function UserInfo(props) {
//   <div className="UserInfo">
//     <Avatar user={props.user} />
//     <div className="UserInfo-name">{props.user.name}</div>
//   </div>;
// }
// function Comment(props) {
//   <div className="Comment">
//     <UserInfo />
//     <div className="Comment-text">{props.text}</div>
//     <div className="Comment-date">{formatDate(props.date)}</div>
//   </div>;
// }

// function Sum(a, b) {
//   return <p>{a + b}</p>;
// }

function Sum(props) {
  return <p>{props.numbers.a + props.numbers.b}</p>;
}

ReactDOM.render(
  <Sum numbers={{ a: 30, b: 49 }} />,
  document.getElementById("root")
);
