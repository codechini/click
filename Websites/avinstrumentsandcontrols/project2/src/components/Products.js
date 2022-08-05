import React,{useState,useEffect} from 'react';
import {
  //Row,
  Button,
  //Col,
  Card
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Products = (props) => {
  return (
    <>
    <div className="pcontainer d-flex justify-content-center align-items-center">
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={props.imgsrc} height='500px' />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" size='lg'>
          <Link className='links' to='/ProductDetails'>Buy</Link> 
        </Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Products;
