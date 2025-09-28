import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import Users from "./Users";
import UserDetails from "./UserDetails";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import About from "./About";
import College from "./College";
import Students from "./Students";
import Departments from "./Departments";
import CollegeDetails from "./CollegeDetails";
// import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      {/* <h1>NavLink and Active Class in React.js Router</h1> */}
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="user">
            <Route path="/user" element={<Users />} />
            {/* <Route path="/user/:id" element={<UserDetails />} /> */}
            <Route path="/user/:id/:name?" element={<UserDetails />} />
            <Route path="/user/signup" element={<Signup />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/college" element={<College />}>
          {/* <Route path="students" element={<Students />} /> */}
          <Route index element={<Students />} />
          <Route path="departments" element={<Departments />} />
          <Route path="details" element={<CollegeDetails />} />
        </Route>
        {/* <Route path="/*" element={<PageNotFound />} /> */}
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}

export default App;
