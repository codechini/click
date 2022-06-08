import React from 'react';
import '../App.css';
import Codechini_img from '../imgs/Codechini_img.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className=" p-4 mb-0 " style={{backgroundColor: 'rgb(9, 7, 6)'}}>
      <a href="../App.js">
        <img src={Codechini_img} alt="My Logo" height="35px" />
      </a>
    </nav>
  )
}

export default Navbar;
