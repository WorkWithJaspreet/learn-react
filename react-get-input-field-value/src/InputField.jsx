import { useState } from "react";

function InputField() {
  const [val, setVal] = useState("");
  return (
    <div>
      <hr />
      <h4>InputField Component</h4>
      <input
        type="text"
        placeholder="Enter username"
        value={val}
        onChange={(event) => {
          setVal(event.target.value);
        }}
      />
      <p>{val}</p>
      <button
        onClick={() => {
          setVal("");
        }}
      >
        Clear Value
      </button>
      <hr />
    </div>
  );
}

export default InputField;
