import "./App.css";
import User from "./User";

function App() {
  const userData = [
    {
      name: "Billie Eilish",
      age: 21,
      email: "Billie Eilish@test.com",
      id: 1,
    },
    {
      name: "Ariana Grande",
      age: 19,
      email: "Ariana Grande@test.com",
      id: 2,
    },
    {
      name: "Tailor Swift Sharma",
      age: 20,
      email: "Tailor Swift@test.com",
      id: 3,
    },
  ];
  return (
    <>
      <h1>Reuse Component in Loop</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <User userDetails={user} />
        </div>
      ))}
    </>
  );
}

export default App;
