import "./App.css";
import Teacher from "./Teacher";
import Student from "./Student";

function App() {
  function studying(name) {
    alert(`Student - ${name} is studying.`);
  }
  return (
    <>
      <h1>Pass Function in Component as Props</h1>
      <Teacher />
      <Teacher />
      <Teacher />
      <Teacher />
      <Teacher />
      <Teacher />
      <Teacher />
      <Teacher />
      <Student studying={studying} name="Billie" />
      <Student studying={studying} name="Ariana Grande" />
      <Student studying={studying} name="Tailor Swift" />
    </>
  );
}

export default App;
