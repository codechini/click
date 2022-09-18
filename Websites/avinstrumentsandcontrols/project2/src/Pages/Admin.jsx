import {React,useState,useEffect} from 'react';
import auth from '../firebase-config';
import {
  Alert,
  Row,
  Col,
  Container,
  Button,
  Form
}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../firebase-config';
import { collection,doc, getDocs, addDoc, where, deleteDoc} from 'firebase/firestore';

const Admin = () => {

  const [item,setnewItem]=useState([]);
  const inventoryCollectionRef=collection(db,"inventory");

  const [name, newName]=useState("");
  const [q, newQ]=useState("");
  const [pcost, newCost]=useState("");
  const [document, newDoc]=useState("");

  const [show, setShow] = useState(false);
  
  useEffect(()=>{
    const getItems = async()=>{
      const itemData=await getDocs(inventoryCollectionRef);
      // console.log(clientData);
      setnewItem(itemData.docs.map((doc)=>({
        ...doc.data(),id: doc.id
      })));
    }
    getItems();
  },[]);

  const addProduct= async()=>{
    await addDoc(inventoryCollectionRef , 
      { 
        pname: name,
        quantity: Number(q),
        cost: Number(pcost),
        docs: document
     });
  }

  const deleteItem=async(name)=>{
    await deleteDoc(doc(db, "inventory", "pname"));
  }


  return (
    <>
      
      <div className="container">
        <Alert show={show} variant='success'>
          Added
        </Alert>
        <p style={{paddingTop:"20px",paddingBottom:"20px",fontSize:'34px',fontWeight:"200"}}>Admin Page</p>
        <Row>
          <Col>
          <div className="container">
          
            <Form className='mx-3 justify-items-center needs-validation' onSubmit={() => {setShow(true)}}>
            Add Product :-
              <Form.Group className="mb-2 d-flex" controlId="formBasicText">
                <Form.Label>Product Name :&nbsp;</Form.Label>
                <Form.Control
                required
                className='inpt'
                autoComplete='off'
                pattern='[A-Za-z]{1,32}'
                onChange={(event)=>{
                  console.log(event.target.value);
                  newName(event.target.value)
                }}
                />
                
              </Form.Group>
              <Form.Group className="mb-2 d-flex" controlId="formBasicText">
                <Form.Label>Product Cost :&nbsp;</Form.Label>
                <Form.Control
                required
                className='inpt'
                autoComplete='off'
                // pattern='[A-Za-z]{1,32}'
                onChange={(event)=>{
                  // console.log(event.target.value);
                  newCost(event.target.value)
                }}
                />
                
              </Form.Group>
              <Form.Group className="mb-2 d-flex" controlId="formBasicText">
                <Form.Label>Product Quantity :&nbsp;</Form.Label>
                <Form.Control
                required
                className='inpt'
                // pattern='[A-Za-z]{1,32}'
                autoComplete='off'
                onChange={(event)=>{
                  // console.log(event.target.value);
                  newQ(event.target.value)
                }}
                />
                
              </Form.Group>
              <Form.Group className="mb-2 d-flex" controlId="formBasicText">
                <Form.Label>Product Docs :&nbsp;</Form.Label>
                <Form.Control
                required
                className='inpt'
                autoComplete='off'
                // pattern='[A-Za-z]{1,32}'
                onChange={(event)=>{
                  // console.log(event.target.value);
                  newDoc(event.target.value)
                }}
                />
                
              </Form.Group>  
              <div className="container">
              <Button onClick={addProduct} className='btnReg mx-2' variant="primary" type="submit">
                Add
              </Button>
              <Button  className='btnReg mx-2' variant="primary" type="submit">
                Update
              </Button>
              <Button onClick={deleteItem}  className='btnReg ' variant="primary" type="submit">
                Delete
              </Button>
              </div>
            </Form>
          </div>
          </Col>

          
          
        </Row>
        <div>
        {item.map((item)=>{
          return(
            <div>
              -  Product Name : <b>{item.pname}</b>
            </div>
          )
        })}
        
    </div>
      </div>
    </>
  )
}

export default Admin;
