import { useState } from "react";

function Data() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  function handleAddUser() {
    setUsers([...users, user]);
  }
  const total = users.length;
  const lastUser = users[users.length - 1];
  const uniqueUsers = [...new Set(users)].length;
  return (
    <div>
      <hr />
      <h4>Data Component</h4>
      <p>Total users: {total}</p>
      <p>Last user: {lastUser}</p>
      <p>Total unique users: {uniqueUsers}</p>
      <input
        type="text"
        placeholder="Add new user"
        onChange={(event) => setUser(event.target.value)}
      />
      <br />
      <br />
      <button onClick={handleAddUser}>Add user</button>
      {users.map((userData, index) => (
        <p key={index}>{userData}</p>
      ))}
      <hr />
    </div>
  );
}

export default Data;
