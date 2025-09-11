function ArraysInProps(props) {
  return (
    <div>
      <hr />
      <h4>ArraysInProps</h4>
      <p>
        College names are {props.names[0]}, {props.names[1]}, {props.names[2]},{" "}
        {props.names[3]}, {props.names[4]}
      </p>
      <hr />
    </div>
  );
}

function ArraysInPropsDestructured({ names }) {
  return (
    <div>
      <hr />
      <h4>ArraysInPropsDestructured</h4>
      <p>
        College names are {names[0]}, {names[1]}, {names[2]}, {names[3]},{" "}
        {names[4]}
      </p>
      <hr />
    </div>
  );
}

export { ArraysInProps, ArraysInPropsDestructured };
