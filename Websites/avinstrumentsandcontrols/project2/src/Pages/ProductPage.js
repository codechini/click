import { React, useState, useEffect } from 'react';
import {
  Row,
  Button,
  Col,
  Card
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../components/Products';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

import pic1 from '../imgs/p1.jpg';
import pic3 from '../imgs/p3.jpg';


const ProductPage = () => {

  const [item,setItem]=useState([]);
  const inventoryCollectionRef=collection(db,"inventory");

  useEffect(()=>{
  
  const getItems = async()=>{
    const itemData=await getDocs(inventoryCollectionRef);
    // console.log(clientData);
    setItem(itemData.docs.map((doc)=>({
      ...doc.data(),id: doc.id
    })));
  }
  
  getItems();
},[]);


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
      {/* {loading ? <Loading /> : <ShowProducts />} */}
      {/* <ShowProducts/> */}
    </Row>
  </div>
  <div className="container">
    <Row>
      <Col>
        <Products imgsrc={pic1} 
          name=''
          
          />
          <div>
          {item.map((item)=>{
            return(
              <div>
                -   Name : <b>{item.pname}</b>
              </div>
            )
          })}
          </div>
        </Col>
        <Col>
          <Products imgsrc={pic3}/>
        </Col>
        <Col>
          <Products imgsrc={pic3}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Products/>
        </Col>
        <Col>
          <Products/>
        </Col>
        <Col>
          <Products/>
        </Col>
      </Row>
      </div>
    </div>

    <div>
        {item.map((item)=>{
          return(
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

export default ProductPage