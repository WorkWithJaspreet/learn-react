import { useState } from "react";
import Clock from "./Clock";

function ColorDropdown() {
  const [color, setColor] = useState("red");
  return (
    <div>
      <hr />
      <h4>ColorDropdown Component</h4>
      <select onChange={(event) => setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="Blue">Blue</option>
      </select>
      <Clock color={color} />
      <hr />
    </div>
  );
}

export default ColorDropdown;
