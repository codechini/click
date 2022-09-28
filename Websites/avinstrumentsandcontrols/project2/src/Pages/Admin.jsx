import { React, useState, useEffect } from 'react';
import {
  Alert,
  Row,
  Col,
  Button,
  Form,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../firebase-config';
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc, firebase } from 'firebase/firestore';

const Admin = () => {

  const [item, setnewItem] = useState([]);
  const inventoryCollectionRef = collection(db, "inventory");

  const [name, newName] = useState("");
  const [q, newQ] = useState(0);
  const [pcost, newCost] = useState(0);
  const [document, newDoc] = useState("");
  const [images, newImages] = useState();

  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      const itemData = await getDocs(inventoryCollectionRef);
      // console.log(clientData);
      setnewItem(itemData.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })));
    }
    getItems();

    setTimeout(() => {
      setShowUpdate(false);
      setShowDelete(false);
    }, 4000);
  }, []);

  const addProduct = async () => {
    await addDoc(inventoryCollectionRef,
      {
        pname: name,
        quantity: Number(q),
        cost: Number(pcost),
        docs: document,
        img: images,
      }, { merge: true });
    setShowAdd(true);
  }

  const deleteItem = async (id) => {
    const itemDoc = doc(db, "inventory", id);
    await deleteDoc(itemDoc);
    setShowDelete(true);
    window.location.reload(true);
  }

  const updateItem = async (id, q) => {
    const itemDoc = doc(db, "inventory", id);
    const newFields = { quantity: q + 1 };
    console.log(newFields)
    await updateDoc(itemDoc, newFields);
    setShowUpdate(true);
    window.location.reload(true);
  }




  return (
    <>
      <Alert show={showAdd} variant='success'>
        Added
      </Alert>
      <div className="container">

        <p style={{ paddingTop: "20px", paddingBottom: "20px", fontSize: '34px', fontWeight: "200" }}>Admin Page</p>
        <Row>
          <Col>
            <div className="container">

              <Form className=' justify-items-center needs-validation' onSubmit={addProduct}>
                Add Product :-
                <Form.Group className="mb-2 d-flex" controlId="formBasicText">
                  <Form.Label>Product Name :&nbsp;</Form.Label>
                  <Form.Control
                    required
                    className='inpt'
                    autoComplete='off'
                    pattern='[A-Za-z]{1,32}'
                    onChange={(event) => {
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
                    pattern='[0-9]+(\\.[0-9][0-9]?)?'
                    onChange={(event) => {
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
                    pattern='[0-9]+(\\.[0-9][0-9]?)?'
                    autoComplete='off'
                    onChange={(event) => {
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
                    // type='file'
                    autoComplete='off'
                    pattern='[0-9]+(\\.[0-9][0-9]?)?'
                    onChange={(event) => {
                      // console.log(event.target.value);
                      newDoc(event.target.value)
                    }}
                  />
                </Form.Group>
                <div className="container">
                  <Button className='btnReg mx-2' variant="primary" type="submit">
                    Add
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        <span>-------------------------------------------------------</span>
        <Row>
          <div className="container">
            <Alert show={showUpdate} variant='primary'>
              Updated
            </Alert>
            <Alert show={showDelete} variant='danger'>
              Deleted
            </Alert>
            {item.map((item) => {
              return (
                <>
                  {" "}
                  <h3>Name: {item.pname}</h3>
                  <h3>Quantity: {item.quantity}</h3>
                  <Button onClick={() => { deleteItem(item.id) }} className='btnReg ' variant="primary" type="submit">
                    Delete
                  </Button>
                  {" "}
                  <Button onClick={() => { updateItem(item.id, item.quantity) }} className='btnReg mx-2' variant="primary" type="submit">
                    Update
                  </Button>
                </>
              )
            })}
          </div>
        </Row>
        <div>
          {item.map((item) => {
            return (
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
