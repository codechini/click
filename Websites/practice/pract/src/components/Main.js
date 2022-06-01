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
              <Col>
              <Card className="shadow p-0 mb-5" style={{ width:'10rem', padding: '0px'}}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb/100px180" />
                <Card.Body>
                 <Card.Title></Card.Title>
                <Card.Text>

                </Card.Text>
                </Card.Body>
              </Card>
              </Col>

              <Col>
              <Card className="shadow p-0 mb-5" style={{ width:'10rem', padding: '0px'}}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb/100px180" />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>

              <Col>
              <Card className="shadow p-0 mb-5" style={{ width:'10rem', padding: '0px'}}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb/100px180" />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>

              <Col>
              <Card className="shadow p-0 mb-5" style={{ width:'10rem', padding: '0px'}}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb/100px180" />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>

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
