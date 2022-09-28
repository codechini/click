import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../firebase-config';
import Products from '../components/Products';

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

  return (
    <div>

      <div className="container">
        {item.map((item) => {
          return (
            <div className="">
              <Products imgsrc={item.img}
                name={item.pname}
                cost={item.cost}
                quantity={item.quantity}
              />
            </div>
          )
        })}
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
    </div>
  )
}

export default Cart;
