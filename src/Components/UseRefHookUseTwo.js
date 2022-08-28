import React, { useState, useEffect, useRef, createRef } from "react";

function useRefHookUseTwo() {
  const intervalRef = useRef();
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h2>Timer = {timer}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Interval
      </button>
    </div>
  );
}

export default useRefHookUseTwo;
