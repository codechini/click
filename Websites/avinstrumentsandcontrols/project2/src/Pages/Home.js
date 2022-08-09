import React from 'react';
import {
  Card,
  Col,
  Row,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../imgs/p2.jpg';
import Products from '../components/Products';


const Home = (props) => {
  return (
    <>
    <Card className="bg-dark text-white rounded-0">
      <Card.Img src={pic} alt="Card image" border-0 />
      <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
        <div className="container">
          <Card.Title className='title1 text-center display-4 py-1'>
            {props.title}
          </Card.Title>
            <Card.Text className='titletxt text-center '>   
              This is the one-stop place for your callibration & testing needs
            </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
    <div className="testredirect">
      {/* <Row className=''>
        <Col xs={6}>
          <p className='c1'>
            Have an equipment to test Contact us 
          </p>
        </Col>
        <Col>
          <button className='btn' href='../Payment'>Submit</button>
        </Col>
      </Row>   */}

      <div className="con1">
          <p className='c1'>
            Have an equipment to test Contact us 
          </p>
      </div>
      <div className="con2">
          <button className='btn' href='../Payment'>Submit</button>
      </div>
    </div>
    {/* <Products /> */}
    </>
  )
}

export default Home;