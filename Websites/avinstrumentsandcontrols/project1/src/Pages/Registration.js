import React from 'react'
import {
  // NavDropdown,
  Row,
  Col,
  Navbar,
  Nav,
  // Form,
  Container,
  Button,
  Form
}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration = () => {
  return (
    <>
      <div className="frm justify-content-center align-items-center">
      <Form className='justify-items-center'>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label >Company Name</Form.Label>
        <Form.Control size='sm' className='inpt' type="text" placeholder="Enter Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label >Email Address</Form.Label>
        <Form.Control size='sm' className='inpt' type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label >Email Address</Form.Label>
        <Form.Control size='sm' className='inpt' type="text" placeholder="Enter Email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Button className='btnReg align-items-center' variant="primary" type="submit">
          Register Business
      </Button>
      <Container>
        <Row>
          <Col>
          <div className="tosignup py-2">
            Already have an Accout<Link to="/LoginPage">Login</Link>
          </div>
          </Col>
        </Row>
      </Container>
      
      </Form>
    </div>
    </>
  )
}

export default Registration;
