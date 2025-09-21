import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import About from "./About";

function App() {
  return (
    <>
      {/* <h1>Navbar using React Router</h1> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
