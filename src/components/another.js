import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './navbar.css'; // Ensure this line is not commented out


function Secondnav() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body">
        <Container className="navbar-container2">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-nav">
              <Nav.Link href="#features">updates</Nav.Link>
              <Nav.Link href="#pricing">yours</Nav.Link>
              <Nav.Link href="#pricing">safe</Nav.Link>
              <Nav.Link href="#pricing">fast</Nav.Link>
              <Nav.Link href="#pricing">by Google</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="centered-container">
        <img src="https://www.google.com/chrome/static/images/chrome-logo.svg" alt="Centered Chrome Logo" className="centered-logo" />
      </div>

      <div>
        <h1 className='text1'>The browser</h1>
        <h1 className='text2'>built to be yours</h1>
      </div>

    
      <p className='chrome-installer'>Need the more chrome installer? <a href=''>Download here</a></p> 

      
    
       
    </>
  );
}

export default Secondnav;
