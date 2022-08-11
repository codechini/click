import React from 'react';
import {
  // NavDropdown,
  Row,
  Col,
  Navbar,
  Container,
  Button,
  Form
}from 'react-bootstrap';

const TestingPage = () => {
  return (
    <>
      <div className='frm justify-content-center align-items-center'>
        <Row>
        <Col className='con1'>
          <div className="infotxt">
            If you wish to test your testing equipment please fill up the form and mail/courrier the item to us At the below given Address.
          </div>
        </Col>
        <Col className='con2'>
        <Form>
          <Form.Text className='regTitle'></Form.Text>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Product Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProductName">
            <Form.Label>Product Description</Form.Label>
            <Form.Control type="textarea" placeholder="Description" />
          </Form.Group>
        </Form>
        </Col>
        </Row>
      </div>
    </>
  )
}

export default TestingPage;
