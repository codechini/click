import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      {/* <nav class="navbar">
        <ul>
          <div class="menu">
            <li><a href="../About">About</a></li>
            <li><a href="../Github">Github</a></li>
            <li><a href="../NpmInst">npm install</a></li>
          </div>
        </ul>
      </nav> */}

      <Navbar expand='lg' className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/">Card-G</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            placement="end"
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Card-G
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="../About">About</Nav.Link>
                <Nav.Link href="../Github">Github</Nav.Link>
                <Nav.Link href="../NpmInst">npm Install</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;