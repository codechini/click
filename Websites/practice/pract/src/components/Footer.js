import React from 'react';
import {
  MDBFooter,
  // MDBContainer,
  // MDBCol,
  // MDBRow
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <>
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center  text-black p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark ' href='https://mdbootstrap.com/'>
          Airbnb.com
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer;
