import Student from "./Student";

function College({ college }) {
  return (
    <div>
      <hr />
      <h4>College Component</h4>
      <div
        style={{
          backgroundColor: "#ccc",
          padding: "20px",
          margin: "20px",
          borderRadius: "10px",
        }}
      >
        <h5>Name: {college.name}</h5>
        <ul style={{ fontSize: "12px" }}>
          <li>
            <p>
              <b>City:</b>
              <span>&nbsp;{college.city}</span>
            </p>
          </li>
          <li>
            <p>
              <b>Website:</b>
              <span>&nbsp;{college.website}</span>
            </p>
          </li>
          <li>
            <div>
              <b>Student:</b>
              <span>
                {college.student.map((student, index) => (
                  <Student key={index} student={student} />
                ))}
              </span>
            </div>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default College;
