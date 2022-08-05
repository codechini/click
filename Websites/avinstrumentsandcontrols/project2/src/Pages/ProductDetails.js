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
    <div className='detailpage'>
      <Row>
      <Col>
        <Products imgsrc={pic3}/>
      </Col>
      <Col className='productdetails'>
      <Card className=''>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
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
