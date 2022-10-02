import React, { useState, useEffect } from 'react';
import Products from '../components/Products';
import { Button } from 'react-bootstrap';

import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc, firebase } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import p5 from '../imgs/p5.jpeg';

const Cart = () => {


  const [item, setItem] = useState([]);
  const inventoryCollectionRef = collection(db, "inventory");

  useEffect(() => {

    const getItems = async () => {
      const itemData = await getDocs(inventoryCollectionRef);
      // console.log(clientData);
      setItem(itemData.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })));
    }

    getItems();
  }, []);

  const location = useLocation();
  const xname = location.state.name;
  const xid = location.state.id;
  const xq = location.state.quantity;
  const xcost = location.state.cost;
  console.log(xname);
  console.log(xid);
  console.log(xq);
  console.log(xcost);


  const navigate = useNavigate();
  const updateItem = async (id, q, name, cost) => {
    // const itemDoc = doc(db, "inventory", xid);
    // const newFields = { quantity: xq - 1 };
    // console.log(newFields);
    // await updateDoc(itemDoc, newFields);

    navigate("/Payment", { state: { id: id, quantity: q, name: name, cost: cost } });
  }



  return (
    <>
      <div className="container">
        <div className="">
          <Products imgsrc={p5}
            name={location.state.name}
            cost={location.state.cost}
            quantity={location.state.quantity}
          />

          {" "}
          <Button className='links' onClick={() => { updateItem(xid, xq, xname, xcost) }} variant="primary" size='lg'>
            Proceed to Checkout
          </Button>
          {/* <Link className='btn links' to='/ULogin'>Please Login</Link> */}

        </div>
      </div>


      <div className='container my-5'>
        {item.map((item) => {
          return (
            <div>
              -   Name : <b>{item.pname}</b>
              -   Cost : <b>{item.cost}</b>
              -   Docs : <b>{item.docs}</b>
              -   Quantity : <b>{item.quantity}</b>
            </div>
          )
        })}

      </div>
    </>
  )
}

export default Cart;
