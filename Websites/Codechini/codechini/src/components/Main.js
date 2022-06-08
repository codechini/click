import React from 'react';
import '../App.css';
// import code_photo from '../imgs/code_photo.jpg';

import {
  Container,
  Col,
  // Image,
  Row
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Main = () => {
  return (
      <main>
        <Container fluid>
          <Row className="fadeImg align-items-center p-0 mx-0">
            <Col xs={9} style={{ 
              textAlign:'center',
              display: 'flex'}}>
            </Col>
            <Col style={{ 
              textAlign:'center',
              display: 'flex'}}>
              <p style={{
                fontSize:'28px',
                color:'rgb(255,255,255)',
                textAlign:'center',
                padding:'0px 0px 0px 0px',
                }}>
                Hi i'm Chinmay.A<br />I'm an Aspiring Front-end Web Developer <br />Skilled with JS , React.js websites & UX designing in Figma
              </p>
            </Col>
          </Row>
          {/* <div className="p-3">
          <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div> */}
        </Container>
      </main>
  )
}

export default Main
