import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import College from "./College";
import Students from "./Students";
import Departments from "./Departments";
import CollegeDetails from "./CollegeDetails";
// import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      {/* <h1>Nested Navbar using React Router</h1> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/college" element={<College />}>
          <Route path="students" element={<Students />} />
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
