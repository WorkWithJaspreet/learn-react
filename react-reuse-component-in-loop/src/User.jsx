function User({ userDetails }) {
  return (
    <div
      style={{
        width: "500px",
        padding: "10px",
        margin: "20px",
        border: "1px solid black",
        borderRadius: "25px",
      }}
    >
      <hr />
      <h4>User Component: {userDetails.name}</h4>
      <p style={{ backgroundColor: "red" }}>{userDetails.id}</p>
      <p style={{ backgroundColor: "green" }}>{userDetails.name}</p>
      <p style={{ backgroundColor: "blue" }}>{userDetails.email}</p>
      <p style={{ backgroundColor: "yellow" }}>{userDetails.age}</p>
      <hr />
    </div>
  );
}

export default User;
