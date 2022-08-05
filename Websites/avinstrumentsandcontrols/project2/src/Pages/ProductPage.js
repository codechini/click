import React from 'react';
import {
  Row,
  Button,
  Col,
  Card
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../components/Products';

import pic1 from '../imgs/p1.jpg';
import pic3 from '../imgs/p3.jpg';
const ProductPage = () => {

  const ShowProducts=()=>{
  return(
    <>
      <div className="buttons d-flex justify-content-center">
        <Button className='mx-1 btn-light btn-outline-dark'>Temperature</Button>
        <Button className='mx-2 btn-light btn-outline-dark'>Pressure</Button>
        <Button className='mx-2 btn-light btn-outline-dark'>More</Button>
        
      </div>
    </>
  )
  }

  return (
    <>
    <div className="container">
    <div className="container">
      <Row>
      <Col>
        <p className="display-6 fw-bold">Products</p>
      </Col>
    </Row>
    <Row className='justify-content-center'>
      {/* {loading ? <Loading /> : <ShowProducts />} */}
      <ShowProducts/>
    </Row>
  </div>
  <div className="container">
    <Row>
      <Col>
        <Products imgsrc={pic1} 
          name='Pneumatic Pump'
          
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
      </Row>
      </div>
</div>
    </>
    )
}

export default ProductPage