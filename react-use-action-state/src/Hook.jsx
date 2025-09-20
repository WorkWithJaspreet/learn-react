import { useActionState } from "react";

function Hook() {
  async function handleSubmit(previousData, formData) {
    let name = formData.get("name");
    let password = formData.get("password");
    console.log("immediate one", name, password);
    await new Promise((res) => setTimeout(res, 2000));
    console.log("delayed one", name, password);
    if (name && password) {
      return { message: "Form submitted successfully!", name, password };
    } else {
      return { error: "Please fill all the fields!", name, password };
    }
  }
  const [data, action, pending] = useActionState(handleSubmit, undefined);
  return (
    <div>
      <hr />
      <h4>Hook Component</h4>
      <form action={action}>
        <input type="text" placeholder="Enter user name" name="name" />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter user password"
          name="password"
        />
        <br />
        <br />
        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>
      {data?.error && <p style={{ color: "red" }}>{data.error}</p>}
      {data?.message && <p style={{ color: "green" }}>{data.message}</p>}
      <p>
        <b>Name: </b>
        <span>{data?.name}</span>
      </p>
      <p>
        <b>Password: </b>
        <span>{data?.password}</span>
      </p>
      <hr />
    </div>
  );
}

export default Hook;
