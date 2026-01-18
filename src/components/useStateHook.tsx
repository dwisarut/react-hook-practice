import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Counter() {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);

  function addIncrement() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(count - count);
  }

  function onVisibilityChange() {
    setHidden(!hidden);
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
          <p
            className={!hidden ? `toggle__message` : `toggle__message__hidden`}
          >
            Bruh
          </p>
          <button className="hidden__button" onClick={onVisibilityChange}>
            {hidden ? <Eye /> : <EyeOff />}
          </button>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Counter;
