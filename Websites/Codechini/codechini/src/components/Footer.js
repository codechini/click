import React from 'react';
import '../App.css';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaGithubSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="icons">
        <a href="https://www.linkedin.com/in/chinmayarangath/">
          <AiOutlineLinkedin size="40px" color='rgb(0, 119, 181)'/>
        </a>
        <a href="https://github.com/codechini"
        style={{paddingLeft:'10px'}}>
          <FaGithubSquare size="37px" color='black'/>
        </a>
        <a href="https://www.youtube.com/channel/UCmSB0d1Zq3Gw2PD6T0ebjjA/playlists"
        style={{paddingLeft:'10px'}}>
          <FaYoutube size="40px" color='rgb(204, 0, 0)'/>
        </a>
      </div>
    </footer> 
  )
}

export default Footer;
