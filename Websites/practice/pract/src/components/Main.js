import React from 'react';

const Main = () => {
  return (
      <>
        <main className="text-center text-white" style={{
            padding:'20px 0px 50px 0px',
            backgroundColor:'rgb(37, 41, 45)'}}>
          <h3>This is in the main component of the website</h3>
          <h4 style={{paddingTop:'20px'}}>
          <ul style={{
              listStyle: 'none',
              color:'rgb(107, 61, 191)'}}>
            <li>Dr.Dissrespect</li>
            <li>Scout</li>
            <li>Shroud</li>
            <li>Physco</li>
          </ul>
          </h4>
        </main>
      </>
  )
}

export default Main;
