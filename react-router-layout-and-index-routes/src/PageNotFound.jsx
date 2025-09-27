import { Link } from "react-router";

function PageNotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <hr />
      <h4>PageNotFound Component</h4>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <img
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
        alt="page not found image"
        style={{ width: "60%" }}
      />
      <hr />
    </div>
  );
}

export default PageNotFound;
