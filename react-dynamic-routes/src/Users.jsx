import { Link } from "react-router";
import "./header.css";

function Users() {
  const userData = [
    {
      name: "Billie Eilish",
      id: 1,
    },
    {
      name: "Ariana Grande",
      id: 2,
    },
    {
      name: "Doja Cat",
      id: 3,
    },
    {
      name: "Cardi B",
      id: 4,
    },
    {
      name: "Rihanna",
      id: 5,
    },
    {
      name: "Charlie Puth",
      id: 6,
    },
  ];
  return (
    <div id="user-component">
      <hr />
      <h4>Users Component</h4>
      {userData.map((user) => (
        <div key={user.id}>
          <p>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </p>
        </div>
      ))}
      <hr />
    </div>
  );
}

export default Users;
