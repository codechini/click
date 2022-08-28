import React from 'react'
import {
  Card,
  Col,
  Row,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = (props) => {
  return (
    <>
    <Card bg='dark' className="text-center text-white rounded-0">
      <Card.Header>{props.l1}</Card.Header>
      <Card.Body bg='dark'>
        <Card.Title>For further Information</Card.Title>
        <Card.Text>Phone no. : 123-4567890</Card.Text>
        <Card.Text>Email. : <Link to="/Mail">avinstrumentsandcontrols@gmail.com</Link></Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">© Copyright 2022 AVInstrumentsandControls</Card.Footer>
    </Card>
</>
  )
}

export default Footer;