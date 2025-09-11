import "./App.css";
import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(0);
  const [display, setDisplay] = useState(true);
  return (
    <>
      <h1>Hooks in React.js - useEffect(function to run, [dependencies])</h1>
      <div>
        <button onClick={() => setInc(inc + 1)}>Increment {inc}</button>
        <br />
        <br />
        <button onClick={() => setDec(dec - 1)}>Decrement {dec}</button>
        <br />
        <br />
        <button onClick={() => setDisplay(!display)}>Toggle</button>
      </div>
      {display ? <Counter incCount={inc} decCount={dec} /> : null}
    </>
  );
}

export default App;
