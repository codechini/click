import React from 'react';
import { db, UserAuth } from '../firebase-config';

const Accounts = () => {

  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <h1 className=''>Account</h1>
      <div className="frm">
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button>
    </div>
  )
}

export default Accounts;