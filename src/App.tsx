import UseStateShowcase from "./components/useStateHook";
import UseEffectShowcase from "./components/useEffectHook";
import UseRefShowcase from "./components/useRefHook";

function App() {
  return (
    <>
      <div className="container">
        <UseStateShowcase />
        <UseEffectShowcase />
        <UseRefShowcase />
      </div>
    </>
  );
}

export default App;
