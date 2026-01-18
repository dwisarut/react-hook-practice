import { useState } from "react";
import { Eye, EyeOff, ChevronDown, ChevronUp } from "lucide-react";

function Counter() {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);

  const message = "Bruh";

  function censorMessage(message: string) {
    const newMessage = [];
    for (let i = 0; i < message.length; i++) {
      newMessage.push("•");
    }
    return newMessage.join("");
  }

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

  function onOpenAccordion() {
    setOpenAccordion(!openAccordion);
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
        <h2>Toggle visibility</h2>
        <div className="visibility__toggle">
          <p className="toggle__message">
            {!hidden ? message : censorMessage(message)}
          </p>
          <button className="hidden__button" onClick={onVisibilityChange}>
            {hidden ? <Eye /> : <EyeOff />}
          </button>
        </div>
        <h2>Accordion</h2>
        <div className="accordion__html">
          <div
            className={
              !openAccordion
                ? `accordion__clickbox__hidden`
                : `accordion__clickbox__show`
            }
            onClick={onOpenAccordion}
          >
            <h3>HTML</h3>
            {!openAccordion ? <ChevronDown /> : <ChevronUp />}
          </div>
          <div className={!openAccordion ? "" : "accordion__content"}>
            {openAccordion ? (
              <p>
                HTML (HyperText Markup Language) is the most basic building
                block of the Web. It defines the meaning and structure of web
                content. Other technologies besides HTML are generally used to
                describe a web page's appearance/presentation (CSS) or
                functionality/behavior (JavaScript).
              </p>
            ) : null}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Counter;
