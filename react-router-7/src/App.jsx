import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router";

function App() {
  return (
    <>
      {/* <h1>React Router 7</h1> */}
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>React Router 7</h1>
                <hr />
                <h3>Home</h3>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <h1>React Router 7</h1>
                <hr />
                <h3>About</h3>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <h1>React Router 7</h1>
                <hr />
                <h3>Contact</h3>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
