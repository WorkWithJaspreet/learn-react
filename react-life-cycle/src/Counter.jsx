import { useEffect } from "react";

function Counter({ incCount, decCount }) {
  useEffect(() => {
    console.log("MOUNTING PHASE: rendering the component only");
  }, []);
  useEffect(() => {
    console.log("UPDATION PHASE: increment count updated");
  }, [incCount]);
  useEffect(() => {
    console.log("UPDATION PHASE: decrement count updated");
  }, [decCount]);
  useEffect(() => {
    console.log("UPDATION PHASE: a state/props got updated");
  });
  useEffect(() => {
    return () => {
      console.log("UNMOUNTING PHASE: distorting the component only");
    };
  });
  return (
    <div>
      <hr />
      <h4>Counter Component</h4>
      <p>Increment Count: {incCount}</p>
      <p>Decrement Count: {decCount}</p>
      <hr />
    </div>
  );
}

export default Counter;
