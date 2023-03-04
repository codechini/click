import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" variant="dark" className=' px-0'>
        <Container >
          {/* <Navbar.Brand><Link className='cc' to="/Main">Codechini</Link></Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className="me-auto">
              <Nav.Link><Link className='links' to="/About" smooth>About Me</Link></Nav.Link>
              <Nav.Link><Link className='links' to="/GetInTouch" smooth>Get in Touch</Link></Nav.Link>
              <Nav.Link><Link className='links' to="/Projects" smooth>Projects</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;
