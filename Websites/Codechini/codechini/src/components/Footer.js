import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaGithubSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer fixed-bottom py-3">
      <a href="https://www.linkedin.com/in/chinmayarangath/" 
        style={{paddingLeft:'10px'}}>
        <AiOutlineLinkedin size="40px" color="rgb(0, 119, 181)"/>
      </a>
      <a href="https://github.com/codechini" 
        style={{paddingLeft:'10px'}}>
        <FaGithubSquare size="35px" color="rgb(58, 40, 166)"/>
      </a>
      <a href="https://www.youtube.com/channel/UCmSB0d1Zq3Gw2PD6T0ebjjA/videos" 
        style={{paddingLeft:'10px'}}>
        <FaYoutube size="40px" color="rgb(255, 0, 0)"/>
      </a>
    </div>
  )
}

export default Footer;
