import { React, useState, useEffect } from 'react';
import {
  Row,
  Button,
  Col,
  Card
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../components/Products';
import { collection, doc, getDocs, addDoc, limit, query, where, onSnapshot } from 'firebase/firestore';
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


// const q = query(inventoryCollectionRef, where("cost", "==", 15000));
// const x = document.querySelector('i2');
// // console.log(q);
//   onSnapshot(q,(snapshot)=>{
//   let item=[];
//   snapshot.docs.forEach((doc)=>{
//     item.push({...doc.data(), id:doc.id})
//   })
//   renderElement(item);
// })

// //  Render element in my div tag
// function renderElement(doc){
//   let p= document.createElement('p');
//   let pname= document.createElement('p');
//   let desc= document.createElement('p');

//   p.setAttribute('i1',doc.id);
//   pname.textContent=doc.data().pname;
//   desc.textContent=doc.data().docs;

//   p.append(pname);
//   p.append(desc);

//   x.appendChild(p);
// }


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
  <div className="">
    
  <div className="i1">
    {item.map((item)=>{
      
      return(
        <div className="">
          {/* -   Name : <b>{item.pname}</b> */}
          <Products imgsrc={pic1} 
          name={item.pname}
          cost={item.cost}
          quantity={item.quantity}
          />
        </div>
            )
          })}
    </div>
    <div className="i2">
      {/* <p></p> */}
    </div>
    
          {/* <Row>
        <Col>
        <Products imgsrc={pic1} 
          name={item.pname}
          />
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
      </Row> */}
    
    </div>
    </div>
    

    <div className=''>
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

export default ProductPage;