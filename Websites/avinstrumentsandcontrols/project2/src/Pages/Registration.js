import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, updateCurrentUser } from "firebase/auth";
import { auth } from '../firebase-config';
import {
  Alert,
  Row,
  Col,
  Container,
  Button,
  Form
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import ProductPage from '../Pages/ProductPage';

const Registration = () => {

  const [newUser, setnewUser] = useState("");
  const [newPhno, setnewPhno] = useState(0);
  const [newEmail, setnewEmail] = useState("");
  const [newPswd, setnewPswd] = useState("");
  const [newGSTIN, setnewGSTIN] = useState("");
  const [newAddr, setnewAddr] = useState("");

  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, "client");
  const [validated, setValidated] = useState("Welcome Back");
  const [errors, setErrors] = useState({});

  // const [item,setItem]=useState([]);
  // const inventoryCollectionRef=collection(db,"inventory");

  // const [test,setTesting]=useState([]);
  // const testCollectionRef=collection(db,"testing");

  // const [bill,setBill] = useState([]);
  // const billCollectionRef = collection(db,"billing");

  const navigate = useNavigate();

  const createClient = async () => {
    await addDoc(userCollectionRef,
      {
        company_name: newUser,
        c_phno: Number(newPhno),
        email: newEmail,
        passwd: newPswd,
        GSTIN: newGSTIN,
        address: newAddr,
        privilage: false
      });
  }

  useEffect(() => {
    const getUsers = async () => {
      const clientData = await getDocs(userCollectionRef);
      setUser(clientData.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })
      ));
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
  }, []);


  // const getAuth=;
  const register = async (e) => {
    e.preventDefault();

    try {
      createUserWithEmailAndPassword(auth, newEmail, newPswd);
      navigate("/ProductPage")
    } catch (err) {
      setErrors(err.message);
    }
    // submitForm();
    createClient();

  }



  // Redirection



  return (
    <>
      <div className="frm rounded justify-content-center align-items-center">
        <Form className='mx-3 justify-items-center needs-validation' onSubmit={register} Validate={validated} >
          <span className='regTitle'>Register your Company</span>
          <Row>
            <Col sm={6} >
              <Form.Group className="mb-2" controlId="formBasicText">
                {/* onSubmit={handleSubmit} */}
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  required='true'
                  className='inpt'
                  autoComplete='off'
                  // pattern='[A-Za-z]{1,32}'
                  placeholder="Company Name"
                  onChange={
                    (event) => {
                      // console.log(event.target.value);
                      setnewUser(event.target.value)
                    }} />
                <Form.Control.Feedback>
                  {/* {errors && <Alert>{errors}</Alert> } */}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label >Email Address</Form.Label>
                <Form.Control
                  required='true'
                  className='inpt'
                  autoComplete='off'
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                  placeholder="Enter Email"
                  onChange={(event) => {
                    // console.log(event.target.value);
                    setnewEmail(event.target.value);
                  }} />
                <Form.Control.Feedback>cannot be empty</Form.Control.Feedback>
                <Form.Control.Feedback>Enter a Valid email</Form.Control.Feedback>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label >Password</Form.Label>
                <Form.Control
                  required='true'
                  className='inpt'
                  autoComplete='off'
                  type="password"
                  // pattern=''
                  placeholder="Enter Password"
                  onChange={(event) => {
                    setnewPswd(event.target.value)
                  }} />
                <Form.Control.Feedback>cannot be empty</Form.Control.Feedback>
                <Form.Control.Feedback>*Must contain atleast a number</Form.Control.Feedback>
                <Form.Control.Feedback>*Must contain atleast a Capital letter</Form.Control.Feedback>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
            </Col>

            <Col sm={6}>
              <Form.Group className="mb-2">
                <Form.Label >Phone no.</Form.Label>
                <Form.Control
                  required='true'
                  className='inpt'
                  autoComplete='off'
                  type="tel"
                  pattern='[7-9]{1}[0-9]{9}'
                  placeholder="Enter Phone no."
                  onChange={(event) => {
                    setnewPhno(event.target.value);
                  }} />
                <Form.Control.Feedback>cannot be empty</Form.Control.Feedback>
                <Form.Control.Feedback>*Number cannot exceed 10 digits</Form.Control.Feedback>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-2" >
                <Form.Label>GSTIN no.</Form.Label>
                <Form.Control className='inpt'
                  required
                  type="text"
                  autoComplete='off'
                  // pattern='^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$'
                  placeholder="Enter GSTIN no."
                  onChange={(event) => {
                    setnewGSTIN(event.target.value)
                  }} />
                <Form.Control.Feedback>cannot be empty</Form.Control.Feedback>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label >Company Address</Form.Label>
                <Form.Control className='inpt'
                  required='true'
                  type="text"
                  autoComplete='off'
                  name='addr'
                  as="textarea"
                  placeholder="Enter Address"
                  onChange={(event) => {
                    setnewAddr(event.target.value)
                  }} />
                <Form.Control.Feedback>cannot be empty</Form.Control.Feedback>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Container>
            <Row>
              <Col>
                <Button className='btnReg' variant="primary" type="submit">
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
                {/* <div>
            logged in is:{auth.currentUser.email}
          </div> */}
              </Col>
            </Row>
          </Container>
        </Form>
      </div>

      {/* Viewing "Tables" from same db # */}

      <div>
        {user.map((user) => {
          return (
            <div>
              -   Email : <b>{user.email}</b>
            </div>
          )
        })}

      </div>
    </>
  );
}

export default Registration;
