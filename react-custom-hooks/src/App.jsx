import "./App.css";
import useToggle from "./useToggle";

function App() {
  const [value, toggleValue] = useToggle(true);
  return (
    <>
      <h1>Custom Hooks in React.js</h1>
      <button onClick={toggleValue}>Toggle</button>
      <button
        onClick={() => {
          toggleValue(true);
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          toggleValue(false);
        }}
      >
        Hide
      </button>
      {value ? (
        <p>
          <b>text</b>
        </p>
      ) : null}
    </>
  );
}

export default App;
