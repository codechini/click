import React from 'react';
import {
  // NavDropdown,
  Row,
  Col,
  Container,
  Button,
  Form
}from 'react-bootstrap';

const TestingPage = () => {
  return (
    <>
      <div className='justify-content-center align-items-center'>
          <p className="infotxt">
            If you wish to test your testing equipment please fill up the form and mail/courrier the item to us At the below given Address.
          </p>
      </div>
      <div className='frm rounded justify-content-center align-items-center'>
        
        <Form>
          <span className='regTitle'>Shipping details</span>
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
          <Container>
            <Row>
              <Col>
              <Button  className='btnReg' variant="primary" type="submit">
                Register Business
              </Button>
          </Col>
        </Row>
      </Container>
        </Form>
        </div>
    </>
  )
}

export default TestingPage;
