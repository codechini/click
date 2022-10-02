import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState, useEffect, useRef } from 'react'
import { NavItem } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import { db } from '../firebase-config';

const PDFAdmin = () => {
  const [item, setItem] = useState([]);
  const cartCollection = collection(db, "cart");


  useEffect(() => {

    const getItems = async () => {
      const itemData = await getDocs(cartCollection);
      // console.log(clientData);
      setItem(itemData.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })));
    }

    getItems();
  }, []);

  const componentRef = useRef();

  const renderPdf = () => {
    const salesInfo = query(cartCollection, where("name", "==", "Pneumatic Pump"));
    console.log(JSON.stringify({ salesInfo }));
  }
  const downloadPdf = useReactToPrint({
    content: () => componentRef.current,
    documnetTitle: 'Sales',
    onafterprint: () => alert('Print Success')
  });


  return (
    <>

      <div className="container pt-5">
        <h1 className='container'>Sales</h1>

        <div ref={componentRef} className="frm">
          {item.map((item) => {
            return (
              <div className="container py-5">
                Produc Name :&nbsp;{item.name}<br />
                Sold :&nbsp;{3}<br />
                {/* Total Sales :&nbsp;108000<br /> */}
              </div>
            )
          })}
        </div>

        <div className="frm">
          <div className="container py-5">
            Total Sales :&nbsp;108000<br />
          </div>
        </div>

      </div>
      <div className="container py-5">
        <button onClick={() => { downloadPdf(); renderPdf() }}>Download Sales Stats</button>
      </div>
    </>
  )
}
  ;
export default PDFAdmin;