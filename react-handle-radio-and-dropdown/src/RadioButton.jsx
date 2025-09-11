import { useState } from "react";

function RadioButton() {
  const [gender, setGender] = useState("male");
  return (
    <div>
      <hr />
      <h4>RadioButton Component</h4>
      <p>
        <b>You are {gender}</b>
      </p>
      <input
        type="radio"
        name="gender"
        id="male"
        value="male"
        checked={gender === "male"}
        onChange={(event) => {
          setGender(event.target.value);
        }}
      />
      <label htmlFor="male">Male</label>
      <br />
      <input
        type="radio"
        name="gender"
        id="female"
        value="female"
        checked={gender === "female"}
        onChange={(event) => {
          setGender(event.target.value);
        }}
      />
      <label htmlFor="female">Female</label>
      <hr />
    </div>
  );
}

export default RadioButton;
