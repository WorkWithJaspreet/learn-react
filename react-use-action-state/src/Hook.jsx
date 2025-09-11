import { useActionState } from "react";

function Hook() {
  function handleSubmit() {}
  const [data, action, pending] = useActionState(handleSubmit, undefined);
  return (
    <div>
      <hr />
      <h4>Hook Component</h4>
      <form action="">
        <input type="text" placeholder="Enter user name" />
        <br />
        <br />
        <input type="password" placeholder="Enter user password" />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
    </div>
  );
}

export default Hook;
