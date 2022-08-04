import React from 'react'
import {
  Card,
  Col,
  Row,
  Button
} from 'react-bootstrap';


const Footer = (props) => {
  return (
    <>
    <Card bg='dark' className="text-center text-white rounded-0">
      <Card.Header>{props.l1}</Card.Header>
      <Card.Body bg='dark'>
        <Card.Title>For further Information</Card.Title>
        <Card.Text>
          123-4567890
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
</>
  )
}

export default Footer;