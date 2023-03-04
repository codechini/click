import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
  const { Component } = props
  // const navigate = useNavigate();
  // let login = localStorage.getItem('login');
  // useEffect(() => {
  //   if (!login) {
  //     navigate('/Login')
  //   }
  // });
  return (
    <>
      <Component />
    </>
  )
}

export default Protected;