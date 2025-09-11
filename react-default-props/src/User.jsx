function User({ name = "Guest" }) {
  return (
    <div>
      <hr />
      <h4>Good Day {name}</h4>
      <hr />
    </div>
  );
}

export default User;
