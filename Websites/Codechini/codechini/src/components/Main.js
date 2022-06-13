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
import { FaReact } from 'react-icons/fa';
import { CgFigma } from 'react-icons/cg';
import { IoLogoJavascript } from 'react-icons/io'


const Main = () => {
  return (
      <main>
        <div className="P1">
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
                textAlign:'end',
                padding:'0px 0px 0px 0px',
                }}>
                Hi i'm Chinmay.A<br />
                I’m a Front-end Web Developer with a year of UI & UX experience<br />
                Currently i’m doing my 3<sup>rd</sup> year of my bachleor degree at Bhavan’s College.
              </p>
            </Col>
          </Row>
        </Container>
        </div>
        <div className="P2 d-flex align-items-center justify-content-center">
          <Container fluid>
            <p style={{
              fontSize:'42px',
              color:'rgb(243,95,27)',
              // textAlign:'center',
              padding:'0px 80px 0px 80px',
              fontFamily: 'Rubik Moonrocks, cursive',
              height:'150px'
              }}>
              Skilled with <IoLogoJavascript color="ead41c"/> , React.js <FaReact color="66d9ef"/> websites & UX designing in Figma<CgFigma color="a951ff"/>
            </p>
          </Container>
        </div>
      </main>
  )
}

export default Main
