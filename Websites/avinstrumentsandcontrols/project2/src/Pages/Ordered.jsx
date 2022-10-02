import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';
import PDF from './PDF';
import { useReactToPrint } from 'react-to-print';

const Ordered = () => {

  const location = useLocation();
  // const xname = location.state.name;
  // const xid = location.state.id;
  // const xq = location.state.quantity;
  // const xcost = location.state.cost;
  // console.log(xname);
  // console.log(xid);
  // console.log(xq);
  // console.log(xcost);
  return (
    <>
      <PDF />
    </>
  )
}

export default Ordered;