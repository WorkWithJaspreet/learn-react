import { Fragment } from "react";

function FirstWay() {
  const someArray = [
    { id: 1, term: "HTML", description: "HyperText Markup Language" },
    { id: 2, term: "CSS", description: "Cascading Style Sheets" },
    { id: 3, term: "JS", description: "JavaScript" },
  ];
  return (
    <div style={{ backgroundColor: "skyblue", color: "blue" }}>
      <hr />
      <h4>FirstWay Component</h4>
      {someArray.map((item) => (
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
      <hr />
    </div>
  );
}

export default FirstWay;
