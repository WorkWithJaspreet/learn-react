import { useId } from "react";

function UserForm() {
  const name = useId();
  const password = useId();
  const skills = useId();
  const terms = useId();
  return (
    <div>
      <hr />
      <h4>UserForm Component</h4>
      <form action="">
        <label htmlFor={name}>Name: </label>
        <input id={name} type="text" placeholder="Enter user name" />
        <br />
        <br />
        <label htmlFor={password}>Password: </label>
        <input
          id={password}
          type="password"
          placeholder="Enter user password"
        />
        <br />
        <br />
        <label htmlFor={skills}>Skills: </label>
        <select id={skills} defaultValue="">
          <option value="" disabled>
            Select your skill
          </option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="ruby">Ruby</option>
        </select>
        <br />
        <br />
        <input type="checkbox" id={terms} />
        <label htmlFor={terms}>Accept Terms & Conditions</label>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
    </div>
  );
}

export default UserForm;
