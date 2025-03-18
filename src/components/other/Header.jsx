import React, { useContext } from 'react'

const Header = (props) => {
  const logout = () => {
    localStorage.setItem("loggedInUser", '');
    props.changeUser('');

  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl'>Hello <br /> <span className='text-3xl font-semibold'> {props.data ? props.data.firstName : "admin"} 👋</span></h1>
        <button onClick={logout} className='bg-red-600 text-white px-5 py-2 rounded-small cursor-pointer'>Logout</button>
    </div>
  )
}

export default Header