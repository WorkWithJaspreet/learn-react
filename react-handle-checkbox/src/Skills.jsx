import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.name]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.name));
    }
  };
  return (
    <div>
      <hr />
      <h4>Skills Component</h4>
      <p>
        <b>Select your skills:</b>
      </p>
      <input type="checkbox" name="c" id="c" onChange={handleSkills} />
      <label htmlFor="c">C</label>
      <br />
      <input type="checkbox" name="cpp" id="cpp" onChange={handleSkills} />
      <label htmlFor="cpp">C++</label>
      <br />
      <input type="checkbox" name="js" id="js" onChange={handleSkills} />
      <label htmlFor="js">JavaScript</label>
      <br />
      <input type="checkbox" name="react" id="react" onChange={handleSkills} />
      <label htmlFor="react">React</label>
      <br />
      <input type="checkbox" name="node" id="node" onChange={handleSkills} />
      <label htmlFor="node">Node.js</label>
      <br />
      <input
        type="checkbox"
        name="python"
        id="python"
        onChange={handleSkills}
      />
      <label htmlFor="python">Python</label>
      <br />
      <input type="checkbox" name="java" id="java" onChange={handleSkills} />
      <label htmlFor="java">Java</label>
      <p>{skills.toString()}</p>
      <hr />
    </div>
  );
}

export default Skills;
