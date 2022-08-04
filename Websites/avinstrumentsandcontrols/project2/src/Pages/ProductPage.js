import React from 'react';
import {
  Row,
  Button,
  Col,
  Card
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../components/Products';

import pic from '../imgs/p1.jpg';

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
      <Row>
        <Col>
          <Products imgsrc={pic} 
          name='Pneumatic Pump'
          
          />
        </Col>
        <Col>
          <Products/>
        </Col>
        <Col>
          <Products/>
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
    </>
    )
}

export default ProductPage