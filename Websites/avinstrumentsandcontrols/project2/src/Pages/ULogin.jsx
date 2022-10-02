import React, { useState } from 'react';
import { auth, db, signInWithGoogle } from '../firebase-config';
import { collection } from 'firebase/firestore';

import {
  Container,
  Form,
  Row,
  Col,
  Alert
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const ULogin = () => {

  const [errors, setErrors] = useState("");
  const [newEmail, setnewEmail] = useState("");
  const [newPswd, setnewPswd] = useState("");
  const [user, setUser] = useState({});
  const userCollectionRef = collection(db, "client");


  return (
    <>
      <div className="frm rounded justify-content-center align-items-center">
        <Form className='mx-3 py-5' >
          <span className='regTitle'>User Login</span>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label >Email Address</Form.Label>
            <Form.Control
              required
              autoComplete='off'
              placeholder="Enter Email"
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
              onChange={
                (e) => {
                  setnewEmail(e.target.value)
                }}
            />
            <Form.Control.Feedback>
              {errors && <Alert>{errors}</Alert>}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label >Password</Form.Label>
            <Form.Control
              required
              autoComplete='off'
              placeholder="Enter Password"
              onChange={
                (e) => {
                  setnewPswd(e.target.value)
                }}
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Container>
            {user.privilage = true ? (
              <button className='btnReg align-items-center' variant="primary" type="submit">
                Login
                {/* {isToggled && <Home />} */}
              </button>
            ) : (
              <button className='btnReg align-items-center' variant="primary" type="submit">
                Log out
                {/* {isToggled && <Home />} */}
              </button>
            )}
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
          <Container>
            <button className='' onClick={signInWithGoogle}>
              <FcGoogle size='24px' />
              Sign in with Google
            </button>
          </Container>
        </Form>
      </div>
    </>
  )
}

export default ULogin;