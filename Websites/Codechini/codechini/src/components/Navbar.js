import React from 'react';
import '../App.css';
import Codechini_img from '../imgs/Codechini_img.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="shadow p-3 mb-5 bg-white rounded">
      <a href="../App.js">
        <img src={Codechini_img} alt="My Logo" height="35px" />
      </a>
    </nav>
  )
}

export default Navbar;
