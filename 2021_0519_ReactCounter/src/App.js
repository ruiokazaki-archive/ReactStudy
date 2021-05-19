import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div style={{ margin: "20px" }}>
      {/* React でスタイルを当てる時は {{}} で囲う必要がある。 */}
      <h3>CounterApp</h3>
      <Counter />
    </div>
  );
};

export default App;
