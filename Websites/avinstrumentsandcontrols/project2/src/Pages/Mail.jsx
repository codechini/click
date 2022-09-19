import React from 'react';
import { 
  Container,
  Form,
  Button,
  Row,
  Col
} from 'react-bootstrap';

const Mail = () => {
  return (
    <>
      <div className="frm rounded justify-content-center align-items-center">
      <Form className='mx-3 my-4 justify-items-center'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label >Company Address</Form.Label>
        <Form.Control className='inpt' 
          type="text"
          name='addr'
          as="textarea"
          placeholder="Enter Address"
          />
          <p className='err'>*Cannnot be empty</p>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      
      <Container>
        <Row>
          <Col>
          <Button className='btnReg' variant="primary" type="submit">
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

export default Mail;
