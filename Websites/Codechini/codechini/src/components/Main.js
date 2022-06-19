import React, { useState } from 'react';
import '../App.css';
import RQG from '../imgs/RQG.jpg';
import clip from '../imgs/clip.mp4';
import {
  Button,
  Card,
  //Container,
  //Col,
  // Image,
  //Row
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaReact } from 'react-icons/fa';
import { CgFigma } from 'react-icons/cg';
import { IoLogoJavascript } from 'react-icons/io';
import { WiDegrees } from 'react-icons/wi';

// const [isHovering, setIsHovering]=useState(false);
// function handleMouseHover(e){
//   setIsHovering(true);
// }

// const clip1=document.querySelectorAll('.clip');
// for(let i=0; i<clip1.length;i++){
//   clip1[i].addEventListener('mouseEnter',function(e){  
//     clip1.play()
//   })
// }

const Main = () => {
  return (
      <main>
        <section className="P1 d-flex align-items-center justify-content-center">
        
              <p  style={{
                fontSize:'30px',
                // color:'rgb(243, 97, 27)',
                //textShadow:'1px 2px 3px rgb(39, 40, 34)',
                textAlign:'center',
                padding:'40px 0px 0px 0px',
                // fontFamily:"Bebas Neue, cursive"
                // border:'2px black'
                
                }}>
                Hi i'm Chinmay.A<br />
                I’m a Front-end Web Developer with a year of <i>UI&UX</i> &nbsp; experience<br />
                Currently i’m doing my 3<sup style={{color:'rgb(30, 150, 30)'}}>rd</sup> year of my bachleor degree<sup><WiDegrees /></sup>at<br /> Bhavan’s College.
              </p>
            
        </section>
        <section className="P2 d-flex align-items-center justify-content-center">
          
            <p style={{
              fontSize:'40px',
              // color:'rgb(243,95,27)',
              // textAlign:'center',
              padding:'0px 0px 0px 80px',
              // fontFamily: 'Rubik Moonrocks, cursive',
              height:'230px',
              border:'2px black'
              // textShadow: '5px 5px 7px black'
              }}>
              Skilled with  <a href='https://www.youtube.com/channel/UCmSB0d1Zq3Gw2PD6T0ebjjA/videos'>
                <IoLogoJavascript color="ead41c"/>
                </a> 
                &nbsp; React.js <a href='https://www.youtube.com/channel/UCmSB0d1Zq3Gw2PD6T0ebjjA/videos'><FaReact color="66d9ef"/></a> websites & UX designing in Figma<CgFigma color="a951ff"/>
            </p>

        </section>
        <section className="P3 d-flex align-items-center justify-content-center" 
        style={{padding:'20px 10px 10px 10px'}} >
          <Card style={{ width: '370px'}}>
          {/* <Card.Img  variant="top" src={clip} style={{height:'500px'}} onMouseEnter={ handleMouseHover()}/> */}
          <video className='c1' src={clip} onMouseEnter={ handleMouseHover} loop></video>
          {/* onMouseEnter={ handleMouseHover()} */}
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere elseu</Button>
            </Card.Body>
          </Card>        
        </section>
      </main>
  );
}

export default Main;
