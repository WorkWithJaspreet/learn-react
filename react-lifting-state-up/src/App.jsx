import "./App.css";
import { useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <h1>Lifting State Up in React.js</h1>
      <AddUser setUser={setUser} />
      <DisplayUser user={user} />
    </>
  );
}

export default App;
