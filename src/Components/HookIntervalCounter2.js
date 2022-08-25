import React from "react";
import { useState, useEffect } from "react";

function HookIntervalCounter2() {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return() => {
        clearInterval(interval)
    }
  }, [count]);

  const tick = () => {
    setCounter(count + 1);
    // setCounter(prevState => prevState + 1)
  };

  return <h1>{count}</h1>;
}
export default HookIntervalCounter2;
