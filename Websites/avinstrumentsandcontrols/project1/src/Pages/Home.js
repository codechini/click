import React from 'react';
import {
  Card,
  Col,
  Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../imgs/p2.jpg';
import Products from './Products';


const Home = (props) => {
  return (
    <>
    <Card className="bg-dark text-white">
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
    
    
    
    
    </>
  )
}

export default Home;