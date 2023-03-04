import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyImage from '../imgs/me.JPG';
import About from './About';
import Projects from './Projects';


const Main = () => {
  return (
    <>
      <Container fluid>
        <div className=''>
          <Link className='cc' to="/Main">Codechini</Link>
        </div>
        <Row className='sect'>
          <Col md="auto" className='tiles'>
            <div>
              <Image fluid
                roundedCircle
                width={750}
                src={MyImage}>
              </Image>
            </div>
          </Col>
          <Col className='tiles'>
            <p>Hi my name is Chinmay</p>
            <Link className='cc' to="/Main">Codechini</Link>
          </Col>
        </Row>
        <About />
        <Projects />
      </Container>
    </>
  )
}

export default Main;