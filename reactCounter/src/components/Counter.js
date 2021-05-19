import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // ステートフックは配列で定義する。
  // 第一引数に名前
  // 第二引数に値を変更できる関数名
  // useState(初期値)
  // 今回は0が初期値

  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <React.Fragment>
      {/* vue の template と同じ役割 */}
      <p>count : {count}</p>
      <button onClick={countUp}>count up</button>
      <button onClick={countDown}>count down</button>
    </React.Fragment>
  );
};

export default Counter;
