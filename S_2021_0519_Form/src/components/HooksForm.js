import React, { useState } from "react";

const HooksForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    alert("name : " + value);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange}></input>
      </label>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default HooksForm;
