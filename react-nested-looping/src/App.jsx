import "./App.css";
import College from "./College";

function App() {
  const collegeData = [
    {
      name: "IET Alwar",
      city: "Alwar",
      website: "www.iet.com",
      student: [
        {
          name: "Billie Eilish",
          age: 21,
          email: "Billie Eilish@test.com",
        },
        {
          name: "Ariana Grande",
          age: 19,
          email: "Ariana Grande@test.com",
        },
        {
          name: "Tailor Swift Kumar Sharma",
          age: 20,
          email: "Tailor Swift@test.com",
        },
      ],
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.iit.com",
      student: [
        {
          name: "Billie Eilish",
          age: 21,
          email: "Billie Eilish@test.com",
        },
        {
          name: "Ariana Grande",
          age: 19,
          email: "Ariana Grande@test.com",
        },
        {
          name: "Tailor Swift Kumar Sharma",
          age: 20,
          email: "Tailor Swift@test.com",
        },
      ],
    },
    {
      name: "KCIET Hisar",
      city: "Hisar",
      website: "www.kciet.com",
      student: [
        {
          name: "Billie Eilish",
          age: 21,
          email: "Billie Eilish@test.com",
        },
        {
          name: "Ariana Grande",
          age: 19,
          email: "Ariana Grande@test.com",
        },
        {
          name: "Tailor Swift Kumar Sharma",
          age: 20,
          email: "Tailor Swift@test.com",
        },
      ],
    },
  ];
  return (
    <>
      <h1>Nested Looping in React.js</h1>
      {collegeData.map((college, index) => (
        <College key={index} index={index} college={college} />
      ))}
    </>
  );
}

export default App;
