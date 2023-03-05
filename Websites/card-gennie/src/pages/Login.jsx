import React from 'react';
import genie from '../imgs/genie-img.png'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="img-section">
        <img className='img-genie' src={genie} alt="genie_image" />
      </div>
      <div className="alignc">
        <form>
          <p className='txt'>Email :</p>
          <input className='inpt' type="email" name="" id="" />
          <p className='txt'>Password :</p>
          <input className='inpt' type="password" name="" id="" /><br />
          <button className='btn' type='submit' rounded='true' >Login</button>
          {/* onClick={login} */}
          <p>Don't have an Account <Link className='a' to='/Register'>Signup</Link></p>
        </form>
      </div>
    </>
  )
}

export default Login;