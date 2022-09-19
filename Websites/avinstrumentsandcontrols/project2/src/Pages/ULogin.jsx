import React, { useState, useEffect } from 'react';
import { firebase, signInWithEmailAndPassword,signOut, updateCurrentUser,onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase-config';
import { collection, doc,query,where,getDoc, getDocs, addDoc, onSnapshot,snapshot } from 'firebase/firestore';
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

const ULogin = () => {

  const [errors,setErrors]=useState("");
  const [user,setUser]=useState({
    newEmail:"",
    newPswd:"",
  });
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
    const empasschk = collection(db, "client");
    let admin =query(empasschk, where("privilage", "==", true));
    let em =query(empasschk, where("email", "==", user.newEmail));
    let ps =query(empasschk, where("passwd", "==", user.newPswd));

    

    onSnapshot(admin,(snapshot)=>{
      let cLient=[];
      snapshot.docs.forEach((doc)=>{
        cLient.push({...doc.data(),id:doc.id})
      })
      console.log(cLient);
      if(cLient.exists){
        navigate("/Admin");
      }
    })

    onSnapshot(em,(snapshot)=>{
      let eMail=[];
      snapshot.docs.forEach((doc)=>{
        eMail.push({...doc.data(),id:doc.id})
      })
      console.log(eMail);
      if(eMail.exists){
        navigate("/ProductPage");
      }
    })

    onSnapshot(ps,(snapshot)=>{
      let pAsswd=[];
      snapshot.docs.forEach((doc)=>{
        pAsswd.push({...doc.data(),id:doc.id})
      })
      console.log(pAsswd);
      if(snapshot.exists){
        navigate("/ProductPage");
      }
    })
    
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
      <span className='regTitle'>User Login</span>
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
              user(e.target.value)
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
              const newPswd=e.target.value;
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

export default ULogin;