import React, { useState } from "react";

const ToggleBtn = () => {
  const [bool, setBool] = useState(true);
  const toggle = () => {
    setBool(!bool);
    console.log(bool);
  };

  return (
    <React.Fragment>
      <small>hooks state</small>
      <p>ToggleBtn : {String(bool)}</p>
      <button onClick={toggle}>Toggle</button>
    </React.Fragment>
  );
};

export default ToggleBtn;
