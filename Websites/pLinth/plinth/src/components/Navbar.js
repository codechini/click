import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
      <nav>
        <Link to="/">pLinth</Link>
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    )
}

export default Navbar;