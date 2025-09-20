import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      {/* <h1>404 Page and Redirection in React.js</h1> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/*" element={<PageNotFound />} /> */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
