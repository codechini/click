import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link><Link className='links' to="/About">About Me</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link className='links' to="/About">Get in Touch</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link className='links' to="/About">Projects</Link></Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Header;