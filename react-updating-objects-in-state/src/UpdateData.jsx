import { useState } from "react";

function UpdateData() {
  const [data, setData] = useState({
    name: "Billie",
    address: {
      city: "New Delhi",
      country: "India",
    },
  });
  function handleName(name) {
    data.name = name;
    setData({ ...data });
  }
  function handleCity(city) {
    data.address.city = city;
    setData({ ...data });
  }
  function handleCountry(country) {
    data.address.country = country;
    setData({ ...data });
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
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter new city"
        onChange={(event) => handleCity(event.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter new country"
        onChange={(event) => handleCountry(event.target.value)}
      />
      <p>Name: {data.name}</p>
      <p>City: {data.address.city}</p>
      <p>Country: {data.address.country}</p>
      <hr />
    </div>
  );
}

export default UpdateData;
