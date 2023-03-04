import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
// import { FaBars } from 'react-icons/fa';


const Header = () => {
  return (
    <>
      {/* <nav class="navbar">
        <ul>
          <div class="nav-btn">
            <label for="nav-check">
              <FaBars />
            </label>
          </div>
          <div class="menu">
            <li><a href="../About">About</a></li>
            <li><a href="../Github">Github</a></li>
            <li><a href="../NpmInst">npm install</a></li>

          </div>
        </ul>
      </nav> */}

      <Navbar expand='lg' className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/">Dash</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            placement="end"
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Dash
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

export default Header
