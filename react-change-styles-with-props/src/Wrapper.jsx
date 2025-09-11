function Wrapper({ children, color = "green", backgroundColor }) {
  return (
    <div
      style={{
        color: color,
        backgroundColor: backgroundColor,
        border: "5px solid green",
        width: "300px",
        margin: "10px",
      }}
    >
      <hr />
      {children}
      <hr />
    </div>
  );
}

export default Wrapper;
