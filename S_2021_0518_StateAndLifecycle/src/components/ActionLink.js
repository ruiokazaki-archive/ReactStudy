import React from "react";

const preDef = (e) => {
  e.preventDefault();
  console.log("clicked");
};

const ActionLink = () => {
  return (
    <a href="#" onClick={preDef}>
      Link
    </a>
  );
};

export default ActionLink;
