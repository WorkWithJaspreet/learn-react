function Information(props) {
  return (
    <div>
      <hr />
      <h4>{props.children}</h4>
      <hr />
    </div>
  );
}

function InformationAsData(data) {
  return (
    <div>
      <hr />
      <h4>{data.children}</h4>
      <hr />
    </div>
  );
}

function InformationDestructured({ children: childrenAlias }) {
  return (
    <div>
      <hr />
      <h4>{childrenAlias}</h4>
      <hr />
    </div>
  );
}

export { Information, InformationAsData, InformationDestructured };
