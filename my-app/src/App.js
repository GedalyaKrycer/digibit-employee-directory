import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from './img/digibits-logo.svg';
import { FaGithub } from 'react-icons/fa';


function App() {
  return (
    <>
      <header>
        <Container>
          <Navbar className="justify-content-between">
            <Navbar.Brand>
              <img src={Logo} alt="DigiBit Logo" />
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="https://github.com/GedalyaKrycer"><FaGithub /></Nav.Link>
            </Nav>

          </Navbar>
          <h1 className="text-center">Team Directory</h1>
        </Container>
      </header>




      <h2>Jocelyn Curtis</h2>
      <h3>Designer</h3>
      <h4>Location</h4>
      <p>jcurtis@digidigits.com</p>


    </>
  );
}

export default App;
