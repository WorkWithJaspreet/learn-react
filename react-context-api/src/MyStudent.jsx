import MySubject from "./MySubject";

function MyStudent() {
  return (
    <div style={{ backgroundColor: "maroon", padding: "10px" }}>
      <h2>MyStudent Component</h2>
      <MySubject />
    </div>
  );
}

export default MyStudent;
