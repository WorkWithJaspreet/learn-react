function Student({ student }) {
  return (
    <div>
      <hr />
      <div>
        <ul>
          <li>
            <p>{student.name}</p>
          </li>
          <li>
            <p>{student.age}</p>
          </li>
          <li>
            <p>{student.email}</p>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default Student;
