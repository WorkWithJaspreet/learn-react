import { useRef } from "react";
import "./App.css";
import InputFirst from "./InputFirst";
import InputSecond from "./InputSecond";

function App() {
  const inputFirst = useRef(null);
  const inputSecond = useRef(null);
  function inputFirstHandler() {
    inputFirst.current.focus();
    inputFirst.current.value = "100";
    inputFirst.current.style.backgroundColor = "lightgreen";
  }
  function inputSecondHandler() {
    inputSecond.current.focus();
    inputSecond.current.value = "100";
    inputSecond.current.style.backgroundColor = "lightblue";
  }
  return (
    <>
      <h1>Forward ref in React.js</h1>
      <InputFirst reference={inputSecond} handler={inputFirstHandler} />
      <InputSecond reference={inputFirst} handler={inputSecondHandler} />
    </>
  );
}

export default App;
