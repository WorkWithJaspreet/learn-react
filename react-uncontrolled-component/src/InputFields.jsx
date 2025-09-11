import { useRef } from "react";

function InputFields() {
  const userRef = useRef(null);
  const passwordRef = useRef(null);
  function handleForm(event) {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user, password);
  }
  function handleFormRef(event) {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log(user, password);
  }
  return (
    <div>
      <hr />
      <h4>InputFields Component</h4>
      <p>
        <b>Uncontrolled Component</b>
      </p>
      <form action="" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter user name" />
        <br />
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter user password"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <p>
        <b>Uncontrolled Component with useRef</b>
      </p>
      <form action="" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} placeholder="Enter user name" />
        <br />
        <br />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter user password"
        />
        <br />
        <br />
        <button>Submit with useRef</button>
      </form>
      <hr />
    </div>
  );
}

export default InputFields;
