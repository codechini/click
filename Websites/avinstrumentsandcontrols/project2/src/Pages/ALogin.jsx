import React, { useState } from 'react';
// , useEffect
import { firebase, signInWithEmailAndPassword,signOut, updateCurrentUser,onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase-config';
// import { collection, doc,query,where,getDoc, getDocs, addDoc, onSnapshot,snapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Form,
  Row,
  Col,
  Alert
}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProductPage from '../Pages/ProductPage';
import { Link } from 'react-router-dom';
// import { db } from '../firebase-config';
// import { FirebaseError } from 'firebase/app';

const ALogin = () => {

  const [errors,setErrors]=useState("");
  const [newEmail,setnewEmail]=useState("");
  const [newPswd,setnewPswd]=useState("");
  const [user,setUser]=useState({})

  const navigate = useNavigate();
    
  const login= async(e)=>{
    e.preventDefault();

    if (newEmail==="admin@gmail.com") {
      if (newPswd==="Admin2345") {
        navigate("/Admin");
      }
    }
  }

  const logout= async(e)=>{
    e.preventDefault();
    try {
      signOut(auth)
        .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });
      navigate("/Home");
    } catch (error) {
      setErrors(error.message);
    }
  }
  
  return (
    <>
      <div className="frm rounded justify-content-center align-items-center">
      <Form className='mx-3 py-5' onSubmit={login} >
      <span className='regTitle'>Admin Login</span>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email Address</Form.Label>
        <Form.Control 
          required
          autoComplete='off'
          value={user.newEmail}
          placeholder="Enter Email"
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          onChange={
            (e)=>{
              setnewEmail(e.target.value)
          }}
           />
          <Form.Control.Feedback>
              {errors && <Alert>{errors}</Alert> }
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
            (e)=>{
              setnewPswd(e.target.value);
          }}
           />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Container>
      {user.privilage=true?(
          <button  className='btnReg align-items-center' variant="primary" type="submit">
          Login
          {/* {isToggled && <Home />} */}
        </button>
        ):(
          <button onClick={()=>{logout()}} className='btnReg align-items-center' variant="primary" type="submit">
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
      </Form>
    </div>
    </>
  )
}

export default ALogin;