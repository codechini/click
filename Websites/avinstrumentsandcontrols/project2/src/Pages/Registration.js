import React, {useState,useEffect} from 'react';
import {
  Alert,
  Row,
  Col,
  Container,
  Button,
  Form
}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
const [errors, setErrors] = useState({});

const [isSubmit,setSubmit]=useState(false);

// const [item,setItem]=useState([]);
// const inventoryCollectionRef=collection(db,"inventory");

// const [test,setTesting]=useState([]);
// const testCollectionRef=collection(db,"testing");

// const [bill,setBill] = useState([]);
// const billCollectionRef = collection(db,"billing");

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
}

useEffect(()=>{
  if(Object.keys(errors).length === 0 && isSubmit){
    console.log(user)
    const getUsers = async()=>{
    const clientData=await getDocs(userCollectionRef);
    setUser(clientData.docs.map((doc)=>({
      ...doc.data(),id: doc.id
    })));
  }
  getUsers();
}
  // const getItems = async()=>{
  //   const itemData=await getDocs(inventoryCollectionRef);
  //   // console.log(clientData);
  //   setItem(itemData.docs.map((doc)=>({
  //     ...doc.data(),id: doc.id
  //   })));
  // }
  // const getBill = async()=>{
  //   const billData=await getDocs(billCollectionRef);
  //   // console.log(clientData);
  //   setBill(billData.docs.map((doc)=>({
  //     ...doc.data(),id: doc.id
  //   })));
  // }
  // const getTest = async()=>{
  //   const testData=await getDocs(testCollectionRef);
  //   // console.log(clientData);
  //   setTesting(testData.docs.map((doc)=>({
  //     ...doc.data(),id: doc.id
  //   })));
  // }
  // getItems();
  // getBill();
  // getTest();
},[errors]);

//VALIDATION
const handleSubmit=(e)=>{
  e.preventDefault();
  setErrors(validate(user));
  setSubmit(true);
};

const validate =(values)=>{
  const errors={};
  const company_name=/[a-zA-Z]+/;
  const email_regrex= /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  const pass = /^\S*(?=\S{8,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&? ])\S$/;
//company Name
if(!values.cname){
  console.log(!company_name.cname)
  errors.cname="Cannot be empty"
}
else if(!company_name.test(values.cname)){
  errors.cname="*Please enter a valid Name";
}
// Email

if(!values.email){
  errors.email="Cannot be empty";
}
else if(!email_regrex.test(values.email)){
  errors.email="*Please enter a valid email-id";
}


if(!values.password){
  errors.password="*Please enter a password";
}
else if(!pass.test(values.password)){
  errors.password="*Password must contain atleast one Uppercase letters, special characters, number and atleast 8 characters";
}
  return errors
};

  return (
    <>
      <div className="frm rounded justify-content-center align-items-center">
      <Form className='mx-3 justify-items-center'>
      <span className='regTitle'>Register your Company</span>
      <Row>
      <Col sm={6} >
      <Form.Group className="mb-2" controlId="formBasicText" onSubmit={handleSubmit}>
      {/* onSubmit={Validate} */}
        <Form.Label>Company Name</Form.Label>
        <Form.Control className='inpt' 
            // required
            controlId='cname'
            name='cname'
            value={user.cname}
            type="text" 
            placeholder="Company Name" 
            onChange={
              (event)=>{
                  setnewUser(event.target.value)
            }}/>
            <p>{errors.cname}</p>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label >Email Address</Form.Label>
        <Form.Control 
          className='inpt'
          // required
          name='email'
          type="email"
          value={user.email}
          placeholder="Enter Email"
          onChange={(event)=>{
              console.log(event.target.value);
              setnewEmail(event.target.value);
          }}/>
          <p>{errors.email}</p>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control 
          className='inpt'
          // required 
          name='password'
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
          name='phno'
          // required 
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
        // required
          type="text"
          name='gstin'
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
          // required
          type="text"
          name='addr'
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
          <Button onClick={handleSubmit} className='btnReg' variant="primary" type="submit">
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

    {/* Viewing "Tables" from same db # */}

    {/* <div>
        {user.map((user)=>{
          return(
            <div>
              -   Email : <b>{user.email}</b>
            </div>
          )
        })}
        
    </div> */}
    </>
  );
}

export default Registration;
