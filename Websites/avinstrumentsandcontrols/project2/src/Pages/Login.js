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
  Button,
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

const Login = () => {

  return (
    <>
    <div className="frm rounded justify-content-center align-items-center">
      <Link to="/ULogin" ><Button className='btnReg' size="lg"  variant="primary">User</Button></Link>
    </div>
    <div className="frm rounded justify-content-center align-items-center">
      
      <Link to="/ALogin" ><Button className='btnReg' size="lg" variant="primary">Admin</Button></Link>
    </div>
    </>
  )
}

export default Login;