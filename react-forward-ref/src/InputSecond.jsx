function InputSecond({ reference, handler }) {
  return (
    <div>
      <hr />
      <h4>InputSecond Component</h4>
      <input type="number" placeholder="Enter number" ref={reference} />
      <br />
      <br />
      <button onClick={handler}>Add 100</button>
      <hr />
    </div>
  );
}

export default InputSecond;
