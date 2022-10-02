import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';

import {
  Link
} from 'react-router-dom';
import { auth, signOutWithGoogle } from '../firebase-config';

import { FaCartPlus } from 'react-icons/fa';
import { CgLogIn } from 'react-icons/cg';
import { AiOutlineUserAdd } from 'react-icons/ai';

console.log(auth);

const Navigationbar = (props) => {


  console.log(localStorage.getItem('name'))
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
                <AiOutlineUserAdd size='24px' />&nbsp; {props.register}
                <div className='carttxt'>Register</div>
              </Link>





              {/* <Link to='/LoginPage' className="btn btn-outline text-white">
                <CgLogIn size='24px' />&nbsp; {props.login}
                <div className='carttxt'>
                  {localStorage.getItem("name")}<br />
                  <Link to='/ULogin'>Sign in</Link>
                  <Link onClick={() => { signOutWithGoogle() }} to='/ULogin'>
                    Logout
                  </Link>
                </div>
              </Link> */}

              <Link to='/LoginPage' className="btn btn-outline text-white">
                <CgLogIn size='24px' />&nbsp; {props.login}
                <div className='carttxt'>
                  {localStorage.getItem("name")}<br />
                  {auth ? (
                    <Link onClick={() => { signOutWithGoogle() }} to='/ULogin'>
                      Logout
                    </Link>
                  ) : (
                    <Link to='/ULogin'>Sign in</Link>
                  )}
                </div>
              </Link>



              <Link to='/Cart' className="btn btn-outline text-white">
                <FaCartPlus size='24px' />&nbsp; {props.quantity}
                <div className='carttxt'>Add to Cart</div>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigationbar;