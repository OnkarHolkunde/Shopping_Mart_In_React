import React from 'react'
import { Link } from 'react-router-dom'
import "./product.css"

function Nav() {
  return (
    <div className='navbar'>
    <Link to='/' className='text'>Home</Link>
    <Link to='/cart' className='text'>Cart</Link>
    </div>
  )
}

export default Nav