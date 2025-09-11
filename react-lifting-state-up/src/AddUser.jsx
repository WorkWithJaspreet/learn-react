function AddUser({ setUser }) {
  return (
    <div>
      <hr />
      <h4>AddUser Component</h4>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(event) => setUser(event.target.value)}
      />
      <hr />
    </div>
  );
}

export default AddUser;
