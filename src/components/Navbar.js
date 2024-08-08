import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'; // Ensure this line is not commented out

function CollapsibleExample() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container className="navbar-container">
          <div className="navbar-brand">
            <img src="https://www.google.com/chrome/static/images/chrome-logo.svg" alt="Chrome Logo" />
            <Navbar.Brand className="chrome" href="#home">Chrome</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">The Browser by Google</Nav.Link>
              <NavDropdown title="Features" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Google Address Bar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Password Check</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Uses Across Devices</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Dark Mode</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Tabs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Articles for You</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Extensions</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Support" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Helpful Tips for Chrome</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Support</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CollapsibleExample;
