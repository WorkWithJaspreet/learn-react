import "./App.css";
import {
  Information,
  InformationAsData,
  InformationDestructured,
} from "./Information";
function App() {
  return (
    <>
      <h1>Sending JSX as props - use props.children</h1>
      <Information>
        <p>My name is Billie Eilish.</p>
        <p>I am 21 years old.</p>
      </Information>
      <InformationAsData>
        <p>My name is Billie Eilish.</p>
        <p>I am 21 years old.</p>
      </InformationAsData>
      <InformationDestructured>
        <p>My name is Billie Eilish.</p>
        <p>I am 21 years old.</p>
      </InformationDestructured>
    </>
  );
}

export default App;
