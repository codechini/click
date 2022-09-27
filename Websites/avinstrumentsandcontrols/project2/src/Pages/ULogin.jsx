import React, { useState, useEffect } from 'react';
import { firebase, signInWithEmailAndPassword, signOut, updateCurrentUser, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase-config';
import { collection, doc, query, where, getDoc, getDocs, addDoc, onSnapshot, snapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';

import {
  // NavDropdown,
  // Navbar,
  // Nav,
  // Form,
  Container,
  // Button,
  Form,
  Row,
  Col,
  Alert
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from '../Pages/ProductPage';
import { Link } from 'react-router-dom';
import { db } from '../firebase-config';
import { FirebaseError } from 'firebase/app';
import GoogleLogin from 'react-google-login';

const ULogin = () => {

  const [errors, setErrors] = useState("");
  const [newEmail, setnewEmail] = useState("");
  const [newPswd, setnewPswd] = useState("");
  const [user, setUser] = useState({});
  const userCollectionRef = collection(db, "client");

  const navigate = useNavigate();

  // const auth = getAuth();


  // useEffect(() => {

  //   const getUsers = async () => {
  //     const clientData = await getDocs(userCollectionRef);
  //     setUser(clientData.docs.map((doc) => ({
  //       ...doc.data(), id: doc.id
  //     })
  //     ));
  //   }
  //   getUsers();
  // }, []);

  // useEffect(() => {
  //   if (user != null) {
  //     navigate('/Accounts');
  //   }
  // }, [users]);




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
              value={newEmail}
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
              value={user.newPswd}
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
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_ID}
            buttonText='Login with google'>
          </GoogleLogin>
        </Form>
      </div>
    </>
  )
}

export default ULogin;