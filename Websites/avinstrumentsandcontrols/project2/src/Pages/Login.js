import React, { useState } from 'react';


import {
  // NavDropdown,
  Navbar,
  Nav,
  // Form,
  Container,
  Button,
  Form,
  Row,
  Col
}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Home from './Home';

const Login = () => {
  const[isToggled,setTogggled]=useState(false);
  return (
    <>
    <div className="frm justify-content-center align-items-center">
      <Form className=''>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Company Name</Form.Label>
        <Form.Control id='C_email' className='inpt' type="email" placeholder="Enter Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Password</Form.Label>
        <Form.Control className='psswd' type="password" placeholder="Enter Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <button onClick={()=>setTogggled(!isToggled)} href='../Home' className='btnReg align-items-center' variant="primary" type="submit">
          Login
          {/* {isToggled && <Home />} */}
      </button>

      <Container>
        <Row>
          <Col>
          <div className="tosignup">
            Don't have an Accout<Link to="/RegPage">Register</Link>
          </div>
          </Col>
        </Row>
      </Container>
      </Form>
    </div>
    </>
  )
}

export default Login;