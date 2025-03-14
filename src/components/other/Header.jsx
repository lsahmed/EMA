import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl'>Hello <br /> <span className='text-3xl font-semibold'> Sarthak 👋</span></h1>
        <button className='bg-red-600 text-white px-5 py-2 rounded-small cursor-pointer'>Logout</button>
    </div>
  )
}

export default Header