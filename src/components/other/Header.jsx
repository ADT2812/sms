import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-end justify-between' >
        <h1 className='text-2xl fonnt-medium'>Hello <br/> <span className='text-3xl font-semibold'>{data?.firstName || "User"} 👋 </span> </h1>
        <button className='bg-red-600 text-lgg font-medium text-white px-5 py-2 rounded-small hover:bg-emerald-700'>Log Out</button>
    </div>
  )
}

export default Header