import { Link, useParams } from "react-router";
import "./header.css";

function UserDetails() {
  const paramsData = useParams();
  return (
    <div id="user-details-component">
      <hr />
      <h4>UserDetails Component</h4>
      <p>
        User Id is <b>{paramsData.id}</b>
      </p>
      <div className="back-link">
        <Link to="/user">
          <b>Back</b>
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default UserDetails;
