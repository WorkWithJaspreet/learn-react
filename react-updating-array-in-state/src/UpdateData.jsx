import { useState } from "react";

function UpdateData() {
  const [data, setData] = useState(["Billie", "Ariana Grande", "Tailor Swift", "Harsh"]);
  const [dataDetails, setDataDetails] = useState([
    { name: "Billie", age: 22 },
    { name: "Ariana Grande", age: 20 },
    { name: "Tailor Swift", age: 21 },
    { name: "Harsh", age: 22 },
  ]);
  function handleName(name) {
    data[data.length - 1] = name;
    setData([...data]);
  }
  function handleAge(age) {
    dataDetails[dataDetails.length - 1].age = age;
    setDataDetails([...dataDetails]);
  }
  return (
    <div>
      <hr />
      <h4>UpdateData Component</h4>
      <input
        type="text"
        placeholder="Enter new name"
        onChange={(event) => handleName(event.target.value)}
      />
      {data.map((name, index) => (
        <p key={index}>Name: {name}</p>
      ))}
      <input
        type="number"
        placeholder="Enter new age"
        onChange={(event) => handleAge(event.target.value)}
      />
      {dataDetails.map((user, index) => (
        <p key={index}>
          User Info: {user.name} is {user.age} years old.
        </p>
      ))}
      <hr />
    </div>
  );
}

export default UpdateData;
