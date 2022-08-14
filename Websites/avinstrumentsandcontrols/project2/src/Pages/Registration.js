import React, {useState,useEffect} from 'react'
import {
  Alert,
  // NavDropdown,
  Row,
  Col,
  // Navbar,
  // Form,
  Container,
  Button,
  Form
}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ValidatedInput } from 'react-bootstrap-validation';
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../firebase-config';

const Registration = () => {

const [newUser,setnewUser]=useState("");
const [newPhno,setnewPhno]=useState(0);
const [newEmail,setnewEmail]=useState("");
const [newPswd,setnewPswd]=useState("");
const [newGSTIN,setnewGSTIN]=useState("");
const [newAddr,setnewAddr]=useState("");

const [user,setUser]=useState([]);
const userCollectionRef=collection(db,"client");

// const [item,setItem]=useState([]);
// const inventoryColl=collection(db,"inventory");

const createClient= async()=>{
  await addDoc(userCollectionRef , 
    { 
      company_name: newUser,
      c_phno: Number(newPhno),
      email: newEmail,
      passwd: newPswd,
      GSTIN: newGSTIN,
      address: newAddr
   });
   Validate();
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

//VALIDATION

const companyName=document.getElementById("cname");
const Email=document.getElementById("email");
const paswd=document.getElementById("password");
const Phoneno=document.getElementById("phno");
const gstinno=document.getElementById("gstin");
//const address=document.getElementById("addr");

function Validate(){
  let cname_regex=  /[a-zA-Z]+/;
  let email_regex=  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let paswd_regex=  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let phno_regex=  /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  let gstin_regex=  /^[A-Z0-9]+$/;

  if(!cname_regex.test(companyName.value)){
    alert("Enter a valid Name");
    return;
  }
  if(!email_regex.test(Email.value)){
    alert("Enter a valid Email Address");
    return;
  }
  if(!paswd_regex.test(paswd.value)){
    alert("Enter a valid Name");
    return;
  }
  if(paswd.length < 16 || paswd.length > 8){
    return false;
}
  if(!phno_regex.test(Phoneno.value)){
    alert("Phone number cannot exceed 10 digits");
    return;
  }
  if(!gstin_regex.test(gstinno.value)){
    alert("Enter a valid GSTIN no.");
    return;
  }
}

// const initValues={cname:'', email:'', password:'', phno:'', gstin:'', addr:''};
// const [inptValues,setInptValues]=useState(initValues);


  return (
    <>
      <div className="frm rounded justify-content-center align-items-center">
      <Form className='mx-3 justify-items-center'>
      <span className='regTitle'>Register your Company</span>
      <Row>
      <Col sm={6} >
      <Form.Group className="mb-2" controlId="formBasicText">
        <Form.Label>Company Name</Form.Label>
        <Form.Control className='inpt' 
            required
            name='cname'
            type="text" 
            placeholder="Company Name" 
            onChange={(event)=>{
              setnewUser(event.target.value)
            }}/>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label >Email Address</Form.Label>
        <Form.Control className='inpt'
          required
          type="email"
          placeholder="Enter Email"
          onChange={(event)=>{
            setnewEmail(event.target.value);

          }}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control 
          className='inpt'
          required 
          type="password" 
          // value={ inptValues.password}
          placeholder="Enter Password"
          onChange={(event)=>{
            setnewPswd(event.target.value)
          }}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
      
      <Col sm={6}> 
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label >Phone no.</Form.Label>
        <Form.Control 
          className='inpt'
          required 
          type="number"
          placeholder="Enter Phone no."
          onChange={(event)=>{
            setnewPhno(event.target.value);
            if(event.target.value.match('[0-9]{10}')){
              <Alert variant="success">
                Please provide valid phone number!
              </Alert>
            }
          }}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>GSTIN no.</Form.Label>
        <Form.Control className='inpt'
        required
          type="text"
          // value={ inptValues.gstin}
          placeholder="Enter GSTIN no."
          onChange={(event)=>{
            setnewGSTIN(event.target.value)
          }} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label >Company Address</Form.Label>
        <Form.Control className='inpt' 
          required
          type="text"
          // value={ inptValues.addr}
          as="textarea"
          placeholder="Enter Address"
          onChange={(event)=>{
            setnewAddr(event.target.value)
          }}/>
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
            Already have an Accout <Link to="/LoginPage">Login</Link>
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
