import "./App.css";
import Wrapper from "./Wrapper";

function App() {
  return (
    <>
      <h1>Change Style using Props</h1>
      <Wrapper>
        <h4>Hello</h4>
      </Wrapper>
      <Wrapper color="red" backgroundColor="yellow">
        <h4>Hello</h4>
        <p style={{ color: "blue" }}>
          Hey there, this is rendered using style="" along with mustache
          notation to pass css.
        </p>
      </Wrapper>
      <Wrapper color="brown">
        <h4>Hello</h4>
      </Wrapper>
    </>
  );
}

export default App;
