import "./App.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CSSModules from "./CSSModules";
import ExternalStyle from "./ExternalStyle";
import InlineStyle from "./InlineStyle";
import ReactBootstrap from "./ReactBootstrap";
import StyledComponents from "./StyledComponents";
import MaterialUI from "./MaterialUI";

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>Styling React.js using CSS</h1>
      <p>There are 5 types of style we have in react.js.</p>
      <p>These are:</p>
      <ol>
        <li>Inline Style</li>
        <li>External Style</li>
        <li>CSS Module (similar to Inline Style but still different)</li>
        <li>Styled Components</li>
        <li>External CSS Library/Framework</li>
      </ol>
      <InlineStyle />
      <ExternalStyle />
      <CSSModules />
      <StyledComponents />
      <ReactBootstrap />
      <MaterialUI />
    </>
  );
}

export default App;
