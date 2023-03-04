import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import QrReader from 'react-qr-reader';
import dash from '../imgs/Dash-image.png';
import { useState } from 'react';

const Login = () => {
  // const login = () => {
  //   localStorage.setItem('login', true);
  //   navigate('/');
  // }
  // const navigate = useNavigate();
  // useEffect(() => {
  //   let login = localStorage.getItem('login');
  //   if (login) {
  //     navigate('/')
  //   }
  // });
  // const register = () => {
  //   localStorage.setItem('login', true);
  //   navigate('/');
  // }
  const qrRef = useRef(null);

  const [qrscan, setQrscan] = useState('No result');
  const handleScan = data => {
    if (data) {
      setQrscan(data)
    }
  }
  const handleError = err => {
    console.error(err)
  }
  return (
    <>
      <p className='center_it'>Login</p>
      <div className="img-section">
        <img className='img-dash' src={dash} alt="genie_image" />
      </div>
      <div className="align">
        <form>
          <p className='txt'>Email :</p>
          <input className='inpt' type="email" name="" id="" />
          <p className='txt'>Password :</p>
          <input className='inpt' type="password" name="" id="" /><br />
          {/* <button className='btn' rounded onClick={login}>Login</button>
          <button className='btn' rounded onClick={register}>Register</button> */}
          {/* <button className='btn' rounded onClick={ }>Register</button> */}
        </form>
      </div>
      <div className="align">
        <Link to="/">
          Back
        </Link>
        <span>QR Scanner</span>

        <center>
          <div style={{ marginTop: 30 }}>
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ height: 240, width: 320 }}
            />
          </div>
        </center>

        <textarea
          style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }}
          rowsMax={4}
          defaultValue={qrscan}
          value={qrscan}
        />
      </div>
    </>
  )
}

export default Login;