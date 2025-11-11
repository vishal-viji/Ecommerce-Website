import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/" exact>
          Ecommerce Guvi Shop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart" exact>
              Cart
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart" exact>
              Checkout
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin" exact>
              Admin
            </Nav.Link>
            <Nav.Link as={NavLink} to="/signup">
              Signup
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Header;