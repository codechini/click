import React from 'react';
import '../App.css';
import RQG from '../imgs/RQG.jpg';
import {
  Button,
  Card,
  Container,
  Col,
  // Image,
  Row
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaReact } from 'react-icons/fa';
import { CgFigma } from 'react-icons/cg';
import { IoLogoJavascript } from 'react-icons/io';
import { WiDegrees } from 'react-icons/wi';

const Main = () => {
  return (
      <main>
        <section className="P1">
        <Container fluid>
          <Row className="fadeImg align-items-center p-0 mx-0">
            <Col lg={4} style={{ 
              textAlign:'center',
              display: 'flex'}}>
            </Col>
            <Col style={{ 
              textAlign:'center',
              display: 'flex'}}>
              <p style={{
                fontSize:'36px',
                color:'rgb(243, 97, 27)',
                textShadow:'5px 5px 7px black',
                textAlign:'center',
                padding:'0px 0px 0px 0px',
                fontFamily:"Bebas Neue, cursive"
                }}>
                Hi i'm Chinmay.A<br />
                I’m a Front-end Web Developer with a year of <i>UI&UX</i> &nbsp; experience<br />
                Currently i’m doing my 3<sup style={{color:'rgb(0, 139, 0)'}}>rd</sup> year of my bachleor degree<sup><WiDegrees /></sup>at<br /> Bhavan’s College.
              </p>
            </Col>
          </Row>
        </Container>
        </section>
        <section className="P2 d-flex align-items-center justify-content-center">
          <Container fluid>
            <p style={{
              fontSize:'40px',
              color:'rgb(243,95,27)',
              // textAlign:'center',
              padding:'0px 0px 0px 80px',
              fontFamily: 'Rubik Moonrocks, cursive',
              height:'230px',
              textShadow: '5px 5px 7px black'
              }}>
              Skilled with  <a href='https://www.youtube.com/channel/UCmSB0d1Zq3Gw2PD6T0ebjjA/videos'>
                <IoLogoJavascript color="ead41c"/>
                </a> React.js <FaReact color="66d9ef"/> websites & UX designing in Figma<CgFigma color="a951ff"/>
            </p>
          </Container>
        </section>
        <section className="P3" style={{padding:'20px 10px 10px 10px'}} >
          <Card style={{ width: '370px'}}>
          <Card.Img  variant="top" src={RQG} style={{height:'500px'}} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>        
        </section>
      </main>
  );
}

export default Main;
