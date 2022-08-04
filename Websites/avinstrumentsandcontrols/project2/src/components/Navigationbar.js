import React from 'react';
import App from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  // NavDropdown,
  Navbar,
  Nav,
  // Form,
  Container,
  //Button
}from 'react-bootstrap';

import {BrowserRouter as Router,
  Routes,
  Route,
  Link} from 'react-router-dom';

import {FaCartPlus} from 'react-icons/fa';
import { CgLogIn } from 'react-icons/cg';
import { AiOutlineUserAdd } from 'react-icons/ai';


const Navigationbar = (props) => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='fs-4' ><Link className='brand' to="/Home">{props.icon}</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" mx-auto my-2 lg-1"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link className='links' to="/Home">{props.l1}</Link></Nav.Link>
            <Nav.Link ><Link className='links' to="/ProductPage">{props.l2}</Link></Nav.Link>
            <Nav.Link ><Link className='links' to="/LearnMore">{props.l3}</Link></Nav.Link>
          </Nav>
          <div className="buttons d-flex justify-content-center">
            <Link to='/RegPage' className="btn btn-outline text-white">
              <AiOutlineUserAdd size='24px'/>&nbsp; {props.register}
              <div className='carttxt'>Register</div>
            </Link>
            <Link to='/LoginPage' className="btn btn-outline text-white">
              <CgLogIn size='24px'/>&nbsp; {props.login}
              <div className='carttxt'>Login</div>
            </Link>
          
            <a href="" className="btn btn-outline text-white">
              <FaCartPlus size='24px'/>&nbsp; {props.quantity}
              <div className='carttxt'>Add to Cart</div>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default Navigationbar;