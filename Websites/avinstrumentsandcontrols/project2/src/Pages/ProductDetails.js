import React from 'react';
import Products from '../components/Products';
import {
  Row,
  Button,
  Col,
  Card
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../imgs/p1.jpg';
import pic3 from '../imgs/p3.jpg';

const ProductDetails = () => {
  return (
    <>
    <div className='container'>
      <Row>
      <Col>
        <Products imgsrc={pic3}/>
      </Col>
      <Col className=''>
      <Card className='detailcard'>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat quos quam iure tempora at atque officiis. Repellat beatae excepturi ut corporis error ducimus at, ratione quo natus eos nulla?
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col>
      </Row>
    </div>
      
    </>
  )
}

export default ProductDetails;
