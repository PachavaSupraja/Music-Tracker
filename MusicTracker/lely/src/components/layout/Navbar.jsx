import React from 'react'
import headphones from './headphones.png';
const Navbar = () => {
  return (
    <div>
      <nav className='navbar All pb-5'>
        <span className="navbar-brand h1 mt-1 mb-1 mx-3 text-white">
          <img src={headphones} alt='icon' width='25px' height='25px' className='mx-2'></img>
          Lely <span className='text-pink fw-bold'> | </span>Get your lyrics
        </span>
        <div className='d-flex '>
        <small className='text-white navbar-item me-4 mt-1'>Home</small>
        <small className='text-white navbar-item me-4 mt-1'>Top tracks</small>
        <small className='text-white navbar-item me-4 mt-1'>Top Artists</small>
        <small className='text-white navbar-item me-5 mt-1'>Support</small>
        </div>
        
      
      </nav>
    </div>
  )
}

export default Navbar
