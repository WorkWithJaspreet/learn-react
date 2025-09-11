import { useTransition } from "react";

function Submit() {
  const [pending, startTransition] = useTransition();
  function handleTransition() {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 5000));
    });
  }
  return (
    <div>
      <hr />
      <h4>Submit Component</h4>
      {pending ? (
        <div>
          <img src="https://i.gifer.com/ZZ5H.gif" alt="loading" width="50px" />
          <br />
          <br />
        </div>
      ) : null}
      <button onClick={handleTransition} disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
      <hr />
    </div>
  );
}

export default Submit;
