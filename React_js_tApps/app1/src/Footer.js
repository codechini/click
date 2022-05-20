import React from 'react'

const Footer = () => {
  
  const AddNum=(x,y)=>{
    return (
      x+y
    )
  }

  const SubNum=(x,y)=>{
    return (
      x-y
    )
  }

  const Today =new Date();

  return (
    <footer>
      <small>
        My Age is : {AddNum(12,7)} <br />
        My Experience in this field is : {SubNum(11,7)} yrs <br />
        Copyright &copy; {Today.getFullYear()}
      </small>
    </footer>
  )
}

export default Footer