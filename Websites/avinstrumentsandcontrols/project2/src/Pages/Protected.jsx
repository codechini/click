import React from 'react';
import { Navigate } from 'react-router-dom';
import { db, UserAuth } from '../firebase-config';

const Protected = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};

export default Protected;