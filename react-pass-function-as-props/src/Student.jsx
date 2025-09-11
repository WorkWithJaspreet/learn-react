function Student({ studying, name }) {
  return (
    <div>
      <hr />
      <h4>Student Component</h4>
      <button onClick={() => studying(name)}>Click (Student)</button>
      <hr />
    </div>
  );
}

export default Student;
