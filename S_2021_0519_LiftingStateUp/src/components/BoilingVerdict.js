import React from "react";

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>沸騰します</p>;
  } else {
    return <p>沸騰しません</p>;
  }
};

export default BoilingVerdict;
