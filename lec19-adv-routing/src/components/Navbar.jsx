import React from 'react'
import { Link, Outlet } from 'react-router-dom' 


const Navbar = () => {
  return (
    <div className='flex px-4 py-8 bg-cyan-900  justify-between'>
      <h2 className='text-xl font-bold'>Tamannaah</h2>
      <div className='flex gap-10'>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/courses'>Courses</Link>
        <Link className='text-lg font-medium' to='/product'>Product</Link>
       
      </div>
    </div>
  )
}

export default Navbar
