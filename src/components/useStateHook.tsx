import { useState } from "react";
import { Eye } from "lucide-react";

function Counter() {
  const [count, setCount] = useState(0);

  function addIncrement() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(count - count);
  }

  return (
    <>
      <div className="counter__useState">
        <h1>useState()</h1>
        <h2>Current number: {count}</h2>
        <div className="counter__btn__group">
          <button onClick={addIncrement}>Add number</button>
          <button onClick={decrement}>Reduce number</button>
          <button onClick={reset}>Reset</button>
        </div>
        <hr />
        <h2>Toggle visibility</h2>
        <div className="visibility__toggle">
          <p className="toggle__message">Bruh</p>
          <button className="hidden__button">
            <Eye className="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
