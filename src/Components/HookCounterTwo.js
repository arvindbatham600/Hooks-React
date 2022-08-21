import React, { useState } from "react";

function HookCounterTwo() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <div>
      <h1>count {count}</h1>
      <button onClick={() => setCount(initialValue)}>
        Reset
      </button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={incrementByFive}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
