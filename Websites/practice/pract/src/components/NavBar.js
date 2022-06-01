import React from 'react';
import {
  Navbar,
  Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiHorseHead } from 'react-icons/gi';

const NavBar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark"  style={{fontSize:'24px'}}>
    <Container>
    <div style={{color: 'white', paddingRight:'15px'}}>
      <GiHorseHead size = '50px' />
    </div>
      <Navbar.Brand href="App.js"  style={{fontSize:'24px'}}>Crammer's</Navbar.Brand>
      <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="App.js">Chinmay</a>
          </Navbar.Text>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
  )
}

export default NavBar;
