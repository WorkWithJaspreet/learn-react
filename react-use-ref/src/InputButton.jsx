import { useRef } from "react";

function InputButton() {
  const headingRef = useRef(null);
  const inputField = useRef(null);
  function headingHandler(color) {
    headingRef.current.style.color = color;
  }
  function inputHandler() {
    console.log(inputField);
    inputField.current.focus();
    inputField.current.style.color = "white";
    inputField.current.style.backgroundColor = "black";
  }
  function toggleHandler() {
    if (inputField.current.style.display != "none") {
      inputField.current.style.display = "none";
    } else {
      inputField.current.style.display = "inline";
    }
  }
  return (
    <div>
      <hr />
      <h4 ref={headingRef}>InputButton Component</h4>
      <button
        onClick={() => {
          headingHandler("red");
        }}
      >
        Red
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          headingHandler("green");
        }}
      >
        Green
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          headingHandler("blue");
        }}
      >
        Blue
      </button>
      <br />
      <br />
      <button onClick={toggleHandler}>Toggle</button>
      <br />
      <br />
      <input type="text" placeholder="Enter your text" ref={inputField} />
      <br />
      <br />
      <button onClick={inputHandler}>Focus</button>
      <hr />
    </div>
  );
}

export default InputButton;
