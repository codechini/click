import React from 'react';
import '../App.css';
import Codechini_img from '../imgs/Codechini_img.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="sticky-top p-4 mb-0 " style={{backgroundColor: 'rgb(9, 7, 6)'}}>
      <a href="../App.js">
        <img src={Codechini_img} alt="My Logo" height="35px" />
    </a>
    <span style={{maxWidth:'100%' ,border:'0' ,margin:'0'}}>
      <a className='justify-content-end' style={{maxWidth:'100%',textAlign:'end',padding:'0px 10px 0px 160px'}} href="www.google.com">
          <u>Learn More</u> 
        </a>
    </span> 
    </nav>
  )
}

export default Navbar;
