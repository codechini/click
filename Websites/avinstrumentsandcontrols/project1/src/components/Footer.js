import React from 'react'
import {
  Card,
  Col,
  Row,
  Button
} from 'react-bootstrap';


const Footer = (props) => {
  return (
    <Card bg='dark' className="text-center text-white">
      <Card.Header>{props.l1}</Card.Header>
      <Card.Body bg='dark'>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  )
}

export default Footer;