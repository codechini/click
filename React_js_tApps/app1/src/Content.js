import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {

  const [item,setItems]= useState([
    {
      id: '1',
      checked:true,
      item:"Fererro Rocher"
    },
    {
      id: '2',
      checked:false,
      item:"Cadbury"
    },
    {
      id: '3',
      checked:false,
      item:"Eclair"
    }
  ]);

  const handleCheck=(id) => {
    const ListItems=item.map((item) =>item.id===id ? {...item,checked: !item.checked }: item);
    setItems(ListItems);
    localStorage.setItem('shoppinglist',JSON.stringify(ListItems));
  }

  const DelCheck=(id) => {
    const ListItems=item.filter((item)=> item.id !==id)
    setItems(ListItems);
    localStorage.setItem('shoppinglist',JSON.stringify(ListItems));
  }

  return (
    <main >
      Plague
      {item.length ? (
        <ul>
        {item.map((item) =>(
          <li className="items" key={item.id}>
            <input 
              type="checkbox"
              onChange={()=>handleCheck(item.id)}
              checked={item.checked}
            />
            <label
              onDoubleClick={()=>handleCheck(item.id)}
              style={(item.checked)? {textDecoration:'line-through'}:null}
            >{item.item}
            </label>
            <FaTrashAlt 
              role="button" tabIndex="0"
              onClick={()=>DelCheck(item.id)}
            />
          </li>
        ))}
      </ul>
      ): (
        <p style={{marginTop:'2rem', marginBottom:'2rem', color:'rgb(255,20,20)'}}>The List is Empty</p>
      )}
    </main>
  )
}

export default Content
