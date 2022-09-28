import { React, useState, useEffect } from 'react';
import {
  Row,
  Button,
  Col
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import useNavigate from 'react-router';
import Products from '../components/Products';
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc, firebase } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Link, useNavigate } from 'react-router-dom';
import pic1 from '../imgs/p1.jpg';
import pic3 from '../imgs/p3.jpg';


const ProductPage = () => {

  const [item, setItem] = useState([]);
  const inventoryCollectionRef = collection(db, "inventory");

  useEffect(() => {

    const getItems = async () => {
      const itemData = await getDocs(inventoryCollectionRef);
      // console.log(clientData);
      setItem(itemData.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })));
    }

    getItems();
  }, []);



  const navigate = useNavigate();

  const updateItem = async (id, q) => {
    // const itemDoc = doc(db, "inventory", id);
    // const newFields = { quantity: q - 1 };
    // console.log(newFields);
    // await updateDoc(itemDoc, newFields);    
    navigate("/Cart");
  }



  return (
    <>

      <div className="container">
        <div className="container">
          <Row>
            <Col>
              <p className="display-6 fw-bold">Products</p>
              <div className="buttons d-flex justify-content-center">
                <Button className='mx-1 btn-light btn-outline-dark'>Temperature</Button>
                <Button className='mx-2 btn-light btn-outline-dark'>Pressure</Button>
                <Button className='mx-2 btn-light btn-outline-dark'>More</Button>

              </div>
            </Col>
          </Row>
          <Row className='justify-content-center'>
          </Row>
        </div>
        <div className="">

          <div className="i1">
            {item.map((item) => {
              return (
                <div className="">
                  <Products imgsrc={item.img}
                    name={item.pname}
                    cost={item.cost}
                    quantity={item.quantity}
                  />
                  {" "}
                  <Button className='links' onClick={() => { updateItem(item.id, item.quantity) }} variant="primary" size='lg'>
                    {/* <Link  className='links'>Add to Cart</Link> */}Add to Cart
                  </Button>
                  {" "}
                  <Button variant="primary" size='lg'>
                    <Link className='links' to='/ProductDetails'>View Details</Link>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </div>


      <div className=''>
        {item.map((item) => {
          return (
            <div>
              -   Name : <b>{item.pname}</b>
              -   Cost : <b>{item.cost}</b>
              -   Docs : <b>{item.docs}</b>
              -   Quantity : <b>{item.quantity}</b>
            </div>
          )
        })}

      </div>

    </>
  )
}

export default ProductPage;
