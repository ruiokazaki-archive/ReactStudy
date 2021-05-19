import React from "react";

import UnorderedList from "./components/UnorderedList";

const numbers = [1, 2, 3, 4, 5, 6];
const App = () => {
  return (
    <div>
      <UnorderedList numbers={numbers} />
      <hr />
    </div>
  );
};

export default App;
