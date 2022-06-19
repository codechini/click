import React from 'react';
import '../App.css';
import Codechini_img from '../imgs/Codechini_img.png';
import {
  Container,
  Navbar
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home"><a href="./App.js"><img src={Codechini_img} alt="" /></a></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            My Resume: <a href="./App.js">Chinmay.A</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;