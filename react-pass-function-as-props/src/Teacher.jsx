function Teacher() {
  function teaching() {
    alert("teacher is teaching.");
  }
  return (
    <div>
      <hr />
      <h4>Teacher Component</h4>
      <button onClick={teaching}>Click (Teacher)</button>
      <hr />
    </div>
  );
}

export default Teacher;
