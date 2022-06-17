import React from 'react';
import {
  // Button,
  Col,
  // Container,
  Card,
  // Image,
  Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {GoMail} from 'react-icons/go';
// import {AiFillLinkedin} from 'react-icons/ai';
import { GrStar } from 'react-icons/gr';

const Main = () => {
  return (
      <>
        <main className="text-center" style={{
            padding:'20px 0px 50px 0px',
            backgroundColor:'rgb(255, 255, 255)'}}>
          <div className="collageImgs" style={{}}>
            <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' style={{padding:'0px 20px 0px 20px'}} />
          </div>
          <div className="headline text-start" style={{padding:'20px 170px 20px 20px'}}>
            <h1>Online Experiences</h1>
            <h4>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</h4>
          </div>
          <div className="cardsSection" style={{padding:'0px 0px 0px 20px', display: 'flex'}}>
            <Row>
              <Col style={{ paddingLeft: '20px'}}>
              <Card className="shadow p-0 mb-4" style={{ width:'10rem', paddingLeft: '20px',}}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb/100px180" />
                <Card.Body>
                 <Card.Title className="ttl1" style={{fontSize:'9px', textAlign:'start'}}><GrStar color='rgb(255, 20, 20)'/><small>5.0 (7) ~USA</small></Card.Title>
                <Card.Text className="txt1" style={{fontSize:'12px', marginBottom:'5px'}}>
                  A which turns red on use for the back
                </Card.Text>
                <Card.Text className="txt2" style={{fontSize:'10px', textAlign:'start'}}>
                  <b>From</b> $172 / person
                </Card.Text>
                </Card.Body>
              </Card>
              </Col>

              <Col style={{ paddingLeft: '5px'}}>
              <Card className="shadow p-0 mb-5" style={{ width:'10rem', paddingLeft: '20px'}}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb/100px180" />
                <Card.Body>
                  <Card.Title style={{fontSize:'12px', textAlign:'start'}}><GrStar color='rgb(255, 20, 20)'/><small>5.0 (7) ~USA</small></Card.Title>
                  <Card.Text className="txt3" style={{fontSize:'12px',textAlign:'start',marginBottom:'5px'}}>
                    A which turns red on use for the back
                  </Card.Text>
                  <Card.Text className="txt4" style={{fontSize:'10px', textAlign:'start'}}>
                  <b>From</b> $172 / person
                </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </div>
        </main>
      </>
  )
}

export default Main;
