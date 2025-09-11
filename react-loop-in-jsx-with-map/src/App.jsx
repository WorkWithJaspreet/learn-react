import "./App.css";
import UserData from "./UserData";

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
      <h1>Loop in JSX with Map function</h1>
      <UserData userData={userData} />
    </>
  );
}

export default App;
