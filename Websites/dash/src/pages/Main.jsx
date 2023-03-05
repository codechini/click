import React, { useEffect, useState } from 'react';
import CardImgM from '../imgs/Mobile.svg';
import CardImgD from '../imgs/Desktop.svg';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import CardAcceptor from '../components/CardAcceptor';


const Main = () => {
  const [item, setnewItem] = useState([]);
  const userColRef = collection(db, "users");

  useEffect(() => {
    const getItems = async () => {
      const itemData = await getDocs(userColRef);
      // console.log(clientData);
      setnewItem(itemData.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })));
    }
    getItems();

    // setTimeout(() => {
    //   setShowUpdate(false);
    //   setShowDelete(false);
    // }, 4000);
  }, [userColRef]);
  return (
    <>
      <div className="align">
        <p>Welcome to the Site</p>
      </div>
      <div className="card-accepter">
        <div className="align">
          <div className="card">
            <div className="cardin">
              <img className='dimension-mobile' src={CardImgM} alt="" />
              <img className='dimension-desktop' src={CardImgD} alt="" />
            </div>
          </div>
        </div>
        <div className=''>
          {item.map((item) => {
            return (
              <div>
                - <b>Name </b>:{item.name}<br />
                - <b>Nickname</b> : {item.nickname}<br />
                {/* - <b>Email</b> : {item.email}<br /> */}
                - <b>D.O.B</b> : {item.dob}<br />
                - <b>Password</b> : {item.paswd}<br />
              </div>
            )
          })}

        </div>
      </div>
      <CardAcceptor />

    </>
  )
}

export default Main;
