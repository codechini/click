import React, { useState, useEffect } from 'react';
import { firebase, signInWithEmailAndPassword,signOut, updateCurrentUser,onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

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
}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from '../Pages/ProductPage';
import { Link } from 'react-router-dom';
import { db } from '../firebase-config';
import { FirebaseError } from 'firebase/app';
// import { collection, getDocs, addDoc } from 'firebase/firestore';
// import Home from './Home';


const Login = () => {

  const[isToggled,setTogggled]=useState(false);
  const [validated, setValidated] = useState("Welcome Back");
  const [newEmail,setnewEmail]=useState("");
  const [newPswd,setnewPswd]=useState("");
  const [errors,setErrors]=useState("");
  const [user,setUser]=useState({});
  const userCollectionRef=collection(db,"client");

  // const auth = getAuth();


  useEffect(()=>{
  
    const getUsers = async()=>{
    const clientData=await getDocs(userCollectionRef);
    setUser(clientData.docs.map((doc)=>({
      ...doc.data(),id: doc.id
    })
    ));
  }
  getUsers();
},[]);
  
  const navigate = useNavigate();
  
  const login= async(e)=>{
    e.preventDefault();
    console.log();
    try{
      const user=await signInWithEmailAndPassword(newEmail, newPswd);
      // eslint-disable-next-line no-lone-blocks
      {user.privilage="true" ?(
        navigate("/Admin")
      ):(
        navigate("/Login")
      )}
      console.log(user);
    }catch(err){
      setErrors(err.message);
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
      <Form className='mx-3 py-5' onSubmit={login} Validate={validated}>
      <span className='regTitle'>Login</span>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email Address</Form.Label>
        <Form.Control 
          required
          placeholder="Enter Name"
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          onChange={
            (event)=>{
                setnewEmail(event.target.value)
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

export default Login;