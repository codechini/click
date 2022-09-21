import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Products from '../components/Products';
import Pdf1 from '../docs/Hydraulic Hand Pump.pdf';
import {
  Row,
  Col,
  NavItem
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../imgs/p1.jpg';
import pic3 from '../imgs/p3.jpg';

const ProductDetails = () => {
  const [shown, setShown] = useState(false);
  return (
    <>
      <div className='container'>
        <Row>
          <Col className='productpad'>
            <Products imgsrc={pic3}
            />
          </Col>
          <Col className='detailPad px-0'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit tempore quae cupiditate quasi eveniet eius dolore labore blanditiis ipsa fugit voluptatem quod id, eum et sit numquam, consectetur minus alias!
            </p>
            <Link to="/Payment" className='btn'>Check out</Link>
          </Col>
        </Row>
      </div>
      <div className='px-5'>
        <button className='btn my-3 px-5' onClick={() => setShown(!shown)}>See Documentation</button>
        {shown ? <React.iframe src={Pdf1} allowFullScreen frameborder="0" width="100%" height="700px"></React.iframe> : null}
      </div>
    </>
  )
}

export default ProductDetails;
