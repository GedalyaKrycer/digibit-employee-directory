import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './img/digibits-logo.svg';


function App() {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <img src={Logo} alt="DigiBit Logo" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
      </Navbar>
      <h1>Team Directory</h1>
      <h2>Jocelyn Curtis</h2>
      <h3>Designer</h3>
      <h4>Location</h4>
      <p>jcurtis@digidigits.com</p>


    </>
  );
}

export default App;
