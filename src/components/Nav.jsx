import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
   <div>
    <Navbar expand="lg" className="navbar d-flex">
      <Container fluid>
        <h1 className="nav-name">Nicholas L. Deignan</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-nav">
            <Link to="/">
              About
            </Link>
            <Link to="/portfolio">
              Portfolio
            </Link>
            <Link to="/contact">
              Contact
            </Link>
            <Link to="/resume">
              Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>  
  );
}

