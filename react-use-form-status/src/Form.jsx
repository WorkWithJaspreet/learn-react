import Input from "./Input";

function Form() {
  async function handleSubmit() {
    await new Promise((res) => {
      setTimeout(res, 5000);
    });
    console.log("Form Submitted");
  }
  return (
    <div>
      <hr />
      <h4>Form Component</h4>
      <form action={handleSubmit}>
        <Input />
      </form>
      <hr />
    </div>
  );
}

export default Form;
