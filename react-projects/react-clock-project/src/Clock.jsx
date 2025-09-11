import { useEffect, useState } from "react";

function Clock({ color }) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <hr />
      <h4>Clock Component</h4>
      <div
        id="clock"
        style={{
          color: color || "black", // default color text
          backgroundColor:
            color === "red"
              ? "#ffcccc"
              : color === "green"
              ? "#ccffcc"
              : color === "blue"
              ? "#ccccff"
              : "#eeeeee", // default background
          width: "90px",
          margin: "auto",
          borderRadius: "5px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <p>{time}</p>
      </div>
      <hr />
    </div>
  );
}

export default Clock;
