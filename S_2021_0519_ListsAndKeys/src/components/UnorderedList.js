import React from "react";

const UnorderedList = (props) => {
  const numbers = props.numbers;
  // const listItems = numbers.map((number) => {
  //   return <li key={number.toString()}>{number}</li>;
  // });
  const listItems = numbers.map((number, index) => {
    return <li key={index}>{number}</li>;
  });
  return <ul>{listItems}</ul>;
};

export default UnorderedList;
