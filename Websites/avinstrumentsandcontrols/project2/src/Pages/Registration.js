import React, {useState,useEffect} from 'react';
// import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase-config';
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
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import ProductPage from '../Pages/ProductPage';

const Registration = () => {

const [newUser,setnewUser]=useState("");
const [newPhno,setnewPhno]=useState(0);
const [newEmail,setnewEmail]=useState("");
const [newPswd,setnewPswd]=useState("");
const [newGSTIN,setnewGSTIN]=useState("");
const [newAddr,setnewAddr]=useState("");

const [user,setUser]=useState([]);
const userCollectionRef=collection(db,"client");
// const [errors, setErrors] = useState({});

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
  
    const getUsers = async()=>{
    const clientData=await getDocs(userCollectionRef);
    setUser(clientData.docs.map((doc)=>({
      ...doc.data(),id: doc.id
    })));
  }
  getUsers();
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
},[]);

//VALIDATION

// const getAuth=;
const register= async()=>{
  try{
    const user= await createUserWithEmailAndPassword(auth,newEmail,newPswd);
    console.log(user);
  }
  catch(errors){
    console.log(errors.message);
  }
  
}

// Redirection
const navigate = useNavigate();



  return (
    <>
      <div className="frm rounded justify-content-center align-items-center">
      <Form className='mx-3 justify-items-center'>
      <span className='regTitle'>Register your Company</span>
      <Row>
      <Col sm={6} >
      <Form.Group className="mb-2" controlId="formBasicText">
      {/* onSubmit={handleSubmit} */}
        <Form.Label>Company Name</Form.Label>
        <Form.Control className='inpt' 
            required
            name='cname'
            type={"text"}
            value={newUser}
            autoComplete='off'
            placeholder="Company Name" 
            onChange={
              (event)=>{
                  setnewUser(event.target.value)
            }}/>
            <p className='err'>*Cannnot be empty</p>
            <p className='err'>*Cannnot contain Numbers</p>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label >Email Address</Form.Label>
        <Form.Control 
          className='inpt'
          // required
          name='email'
          value={newEmail}
          type={"email"}
          autoComplete='off'
          placeholder="Enter Email"
          onChange={(event)=>{
              console.log(event.target.value);
              setnewEmail(event.target.value);
          }}/>
          <p className='err'>*Cannnot be empty</p>
          <p className='err'>*Invalid Email</p>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control 
          className='inpt'
          required 
          name='password'
          value={newPswd}
          type="password"
          placeholder="Enter Password"
          onChange={(event)=>{
            setnewPswd(event.target.value)
          }}/>
          <p className='err'>*Cannnot be empty</p>
          <p className='err'>*Must contain atleast a number</p>
          <p className='err'>*Must contain atleast a Capital letter</p>
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
          name='phno'
          value={newPhno}
          type="number"
          placeholder="Enter Phone no."
          onChange={(event)=>{
            setnewPhno(event.target.value);
          }}/>
          <p className='err'>*Cannnot be empty</p>
          <p className='err'>*Number cannot exceed 10 digits</p>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>GSTIN no.</Form.Label>
        <Form.Control className='inpt'
          required
          type="text"
          name='gstin'
          value={newGSTIN}
          placeholder="Enter GSTIN no."
          onChange={(event)=>{
            setnewGSTIN(event.target.value)
          }} />
          <p className='err'>*Cannnot be empty</p>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label >Company Address</Form.Label>
        <Form.Control className='inpt' 
          type="text"
          name='addr'
          as="textarea"
          placeholder="Enter Address"
          onChange={(event)=>{
            setnewAddr(event.target.value)
          }}/>
          <p className='err'>*Cannnot be empty</p>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
      
      </Row>

      <Container>
        <Row>
          <Col>
          <Button onClick={()=>{register();createClient();navigate("/ProductPage") }} className='btnReg' variant="primary" type="submit">
          {/* onClick={handleSubmit} */}
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
