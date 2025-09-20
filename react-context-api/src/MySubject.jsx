import { useContext } from "react";
import SubjectContext from "./ContextData";

function MySubject() {
  const subject = useContext(SubjectContext);
  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <h2>MySubject Component</h2>
      <p>
        <b>Subject: </b>
        <span>{subject}</span>
      </p>
    </div>
  );
}

export default MySubject;
