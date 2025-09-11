import styled from "styled-components";

// Recommended way of using styled-components
// const Heading = styled.h4`
//   color: deepskyblue;
//   background-color: blue;
//   margin: 20px;
//   padding: 20px;
// `;

function StyledComponents() {
  const Heading = styled.h4`
    color: deepskyblue;
    background-color: blue;
    margin: 20px;
    padding: 20px;
  `;
  const Para = styled.p({
    color: "blue",
    backgroundColor: "deepskyblue",
    margin: "20px",
    padding: "20px",
  });
  return (
    <div>
      <hr />
      <Heading>StyledComponents Component</Heading>
      <Para>This is written using styled imported from styled-components.</Para>
      <hr />
    </div>
  );
}

export default StyledComponents;
