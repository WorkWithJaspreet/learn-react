function ObjectsInProps(props) {
  return (
    <div>
      <hr />
      <h4>ObjectsInProps</h4>
      <p>{props.info.name}</p>
      <p>{props.info.age}</p>
      <p>{props.info.city}</p>
      <p>{props.info.country}</p>
      <hr />
    </div>
  );
}

function ObjectsInPropsDestructured({ info }) {
  return (
    <div>
      <hr />
      <h4>ObjectsInPropsDestructured</h4>
      <p>{info.name}</p>
      <p>{info.age}</p>
      <p>{info.city}</p>
      <p>{info.country}</p>
      <hr />
    </div>
  );
}

export { ObjectsInProps, ObjectsInPropsDestructured };
