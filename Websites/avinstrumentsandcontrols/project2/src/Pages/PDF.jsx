import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';


const PDF = () => {

  const location = useLocation();
  const componentRef = useRef();
  const downloadPdf = useReactToPrint({
    content: () => componentRef.current,
    documnetTitle: 'Bill',
    onafterprint: () => alert('Print Success')
  });

  return (
    <>
      <div ref={componentRef} className="container pt-5">
        <h1 className='container'>AvinstrumentsandControls</h1>
        <div className="frm">
          <div className="container py-5">
            Name :&nbsp;{location.state.name}<br />
            Cost :&nbsp;{location.state.cost}<br />
            Final Amount :&nbsp;{location.state.cost}<br />
          </div>
        </div>
      </div>
      <div className="container py-5">
        <button onClick={downloadPdf}>Download Bill</button>
      </div>
    </>
  )
}

export default PDF;