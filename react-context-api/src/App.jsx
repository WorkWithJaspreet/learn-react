import { useState } from "react";
import "./App.css";
import SubjectContext from "./ContextData";
import MyCollege from "./MyCollege";

function App() {
  const [subject, setSubject] = useState("");
  return (
    <>
      <div style={{ backgroundColor: "yellow", padding: "10px" }}>
        <SubjectContext.Provider value={subject}>
          <h1>Context API in React.js</h1>
          <select
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          >
            <option value="">Select Subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="Geography">Geography</option>
            <option value="English">English</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Physical Education">Physical Education</option>
            <option value="Art">Art</option>
            <option value="Music">Music</option>
          </select>
          <br />
          <br />
          <button onClick={() => setSubject("")}>Clear</button>
          <MyCollege />
        </SubjectContext.Provider>
      </div>
    </>
  );
}

export default App;
