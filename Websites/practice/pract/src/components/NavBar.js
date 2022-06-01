import React from 'react';
import {
  Navbar,
  Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAirbnb } from 'react-icons/fa';

const NavBar = () => {
  return (
    <>
    <Navbar className="shadow p-3 mb-5" bg="light" variant="light"  style={{fontSize:'24px', margin:'0px 0px', padding:'10px'}}>
    <Container>
    <div style={{color: 'rgba(235, 57, 118,0.7)', paddingRight:'5px'}}>
      <FaAirbnb size = '40px' />
    </div>
      <Navbar.Brand href="App.js"  style={{fontSize:'28px', paddingRight:'40px', color: 'rgb(235, 57, 118)'}}>
        airbnb
      </Navbar.Brand>
      <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* Signed in as: <a href="App.js">Chinmay</a> */}
          </Navbar.Text>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
  )
}

export default NavBar;
