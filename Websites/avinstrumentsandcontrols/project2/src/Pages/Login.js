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
  const [newEmail,setnewEmail]=useState("");
  const [newPswd,setnewPswd]=useState("");

  const login= async()=>{

  }
  return (
    <>
    <div className="frm rounded justify-content-center align-items-center">
      <Form className='mx-3 py-5' onSubmit={login}>
      <span className='regTitle'>Login</span>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email Address</Form.Label>
        <Form.Control 
          required
          placeholder="Enter Name"
          onChange={
            (event)=>{
                setnewEmail(event.target.value)
          }}
           />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Password</Form.Label>
        <Form.Control 
          required
          size='lg'
          placeholder="Enter Name"
          onChange={
            (event)=>{
                setnewPswd(event.target.value)
          }}
           />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Container>
        <button onClick={()=>setTogggled(!isToggled)} href='../Home' className='btnReg align-items-center' variant="primary" type="submit">
          Login
          {/* {isToggled && <Home />} */}
        </button>
      </Container>
      <Container>
        <Row>
          <Col>
          <div className="tosignup">
            Don't have an Account <Link to="/RegPage">Register</Link>
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