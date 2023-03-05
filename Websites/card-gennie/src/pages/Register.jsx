import React, { useState } from 'react';
import { useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import QRCode from 'react-qr-code';
import qrcode from 'qrcode';
import { Link, useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import ChildProcessSpawn from '../components/ChildProcessSpawn';
// import Mobile from '../imgs/Mobile.svg'

const Register = () => {
  //                                                            Generate QR Code
  const generateqr = async () => {
    var name = document.getElementById('name').value;
    var nickname = document.getElementById('nickname').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var paswd = document.getElementById('paswd').value;
    var url = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=Name:" +
      name + " Nickname: " + nickname + "%0a Email: " + email + " DOB: " + dob + " Password: " + paswd;
    var ifr = `<iframe src="${url}" height="200" width="200"></iframe>`;
    document.getElementById('qrcode').innerHTML = ifr;
    const img = await qrcode.toDataURL(url);
    setImageQR(img);
  }
  //                                                             Printing
  const componentRef = useRef();
  const [text, setText] = useState("");
  const [imageQR, setImageQR] = useState();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'QrCode',
    onafterprint: () => alert('Success')
  });



  return (
    <>
      <div className="alignc">
        <Row>
          <Col>
            <div className="alignc" >

              <a href={imageQR} download='code'>
                <div className='qrcode' id="qrcode" ref={componentRef}>

                </div></a>
            </div>
            <Button className='btn' onClick={handlePrint}>Download</Button>
          </Col>
          <Col>
            <form method='' className="">
              <br />

              <input className="inpt" id='name' name='name' type="text" placeholder="Name" /><br />
              <input className="inpt" id='nickname' name='nickname' type="text" placeholder='Nickname' maxLength="19" /><br />
              <input className="inpt" id='email' name='email' type="text" placeholder="xyz@email.com" /><br />
              <input className="inpt" id='dob' name='dob' type="text" placeholder="D.O.B" /><br />
              <input className="inpt" id='paswd' name='paswd' type="text" placeholder="Password" /><br />
              <input className="btn" type='button' value="Send Message" onClick={generateqr} placeholder='Sign up' />
              <p>Already have an Account <Link className='a' to='/'>Login</Link></p>
            </form>
          </Col>
        </Row>
      </div>
    </>

  )
}

export default Register;

// hello you are watching codechini and my name is chinmay and today we are going to talk abiut ....
{/* onChange={(e) => { handelChange(e) }} */ }
{/* onkeypress='return event.charCode >= 48 && event.charCode <= 57' */ }
{/* <Button type="submit" className="btn" variant="outline-success" onClick={generateqr()}>Generate</Button> */ }