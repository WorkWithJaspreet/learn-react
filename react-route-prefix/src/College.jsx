import { NavLink, Outlet } from "react-router";

function College() {
  return (
    <div className="college">
      <hr />
      <h4>College Component</h4>
      {/* <NavLink className="link" to="students"> */}
      <NavLink className="link" to="">
        Students
      </NavLink>
      <NavLink className="link" to="departments">
        Departments
      </NavLink>
      <NavLink className="link" to="details">
        College Details
      </NavLink>
      <div className="home-link">
        <NavLink to="/">
          <b>Go to Home</b>
        </NavLink>
      </div>
      <Outlet />
      <hr />
    </div>
  );
}

export default College;
