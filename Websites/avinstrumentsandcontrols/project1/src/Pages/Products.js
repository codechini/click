import React,{useState,useEffect} from 'react';
import {
  Row,
  Button,
  Col,
  Card
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../imgs/p1.jpg';

const Products = () => {
  

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

    <div className="pcontainer d-flex">
    <Card style={{ width: '29rem' }}>
      <Card.Img variant="top" src={pic} height='500px' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" size='lg'>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Products;
