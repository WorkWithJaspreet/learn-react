import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(0);
  useEffect(() => {
    callInc();
  }, [inc]);
  useEffect(() => {
    callDec();
  }, [dec]);
  function callInc() {
    console.log("callInc function called! - ", inc);
  }
  function callDec() {
    console.log("callDec function called! - ", dec);
  }
  return (
    <>
      <h1>Hooks in React.js - useEffect(function to run, [dependencies])</h1>
      <div>
        <button onClick={() => setInc(inc + 1)}>Increment {inc}</button>
        <br />
        <br />
        <button onClick={() => setDec(dec - 1)}>Decrement {dec}</button>
      </div>
    </>
  );
}

export default App;
