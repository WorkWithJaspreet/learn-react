import { useState } from "react";

function Dropdown() {
  const [city, setCity] = useState("delhi");
  return (
    <div>
      <hr />
      <h4>Dropdown Component</h4>
      <p>
        <b>You are from {city}</b>
      </p>
      <select
        defaultValue="delhi"
        onChange={(event) => {
          setCity(event.target.value);
        }}
      >
        <option value="delhi">Delhi</option>
        <option value="noida">Noida</option>
        <option value="gurgaon">Gurgaon</option>
      </select>
      <hr />
    </div>
  );
}

export default Dropdown;
