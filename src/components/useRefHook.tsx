import { useState, useRef } from "react";

function UseRefShowcase() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | undefined>(undefined);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <div className="counter__useRef">
        <h1>useRef()</h1>
        <h2>Stopwatch</h2>
        <h3>Time passed: {secondsPassed.toFixed(3)}</h3>
        <div className="counter__btn__group">
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
        </div>
      </div>
    </>
  );
}

export default UseRefShowcase;
