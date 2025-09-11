import { useState } from "react";

function InputFields() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <hr />
      <h4>InputFields Component</h4>
      {/* <form action="" method=""> */}
      <input
        type="text"
        placeholder="Enter username"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <p>{name}</p>
      <p>{email}</p>
      <p>{password}</p>
      <button
        onClick={() => {
          setName("");
          setEmail("");
          setPassword("");
        }}
      >
        Clear All
      </button>
      {/* </form> */}
      <hr />
    </div>
  );
}

export default InputFields;
