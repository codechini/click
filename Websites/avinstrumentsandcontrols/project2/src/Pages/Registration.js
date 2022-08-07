import React, {useState,useEffect} from 'react'
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
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config';

const Registration = () => {
const [user,setUser]=useState([]);
const userCollectionRef=collection(db,"client");
const [item,setItem]=useState([]);
const inventoryColl=collection(db,"inventory");

const createClient= async()=>{

}

useEffect(()=>{
  const getUsers = async()=>{
    const clientData=await getDocs(userCollectionRef);
    // console.log(clientData);
    setUser(clientData.docs.map((doc)=>({
      ...doc.data(),id: doc.id
    })));
  }
  getUsers();
},[]);

  return (
    <>
      <div className="frm justify-content-center align-items-center">
      <Form className='justify-items-center'>
      <span className='regTitle'>Register your Company</span>
      <Row>
      <Col sm={6} >
      <Form.Group className="mb-2" controlId="formBasicText">
        <Form.Label id='Text' value='text' >Company Name</Form.Label>
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
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control size='sm' className='inpt' type="text" placeholder="Enter Password" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
      
      <Col sm={6}> 
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
      </Col>
      
      </Row>

      <Container>
        <Row>
          <Col>
          <Button onClick={createClient} className='btnReg' variant="primary" type="submit">
            Register Business
          </Button>
          </Col>
        </Row>
      </Container>
      
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
    {/* <div>
      {user.map((user)=>{
        return(
          <div className='container'>
            id : {user.c_id}<br/>
            Company Name  : {user.company_name}<br/>
            Company Email : {user.email}<br/>
            Company Cell  : {user.c_phno}<br/>
            Company Address : {user.address}<br/>
            Company GSTIN : {user.GSTIN}<br/>
          </div>
        )
      })}
    </div> */}
    
    </>
  );
}

export default Registration;
