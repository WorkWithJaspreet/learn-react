import { useFormStatus } from "react-dom";

function Input() {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <div>
      <hr />
      <h4>Input Component</h4>
      <input type="text" placeholder="Enter user name" />
      <br />
      <br />
      <input type="password" placeholder="Enter user password" />
      <br />
      <br />
      <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
      <hr />
    </div>
  );
}

export default Input;
