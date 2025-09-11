import { useState } from "react";
import "./App.css";
import Student from "./Student";

function App() {
  const [student, setStudent] = useState("");
  return (
    <>
      <h1>States in React.js</h1>
      {student && <Student name={student} />}
      <button onClick={() => setStudent("Ariana Grande")}>Next Student Name</button>
      <button onClick={() => setStudent("Billie")}>Prev Student Name</button>
    </>
  );
}

export default App;
