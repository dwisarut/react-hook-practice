import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseStateShowcase from "./components/useStateHook";
import UseEffectShowcase from "./components/useEffectHook";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<UseStateShowcase />} />
            <Route path="/" element={<UseEffectShowcase />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
