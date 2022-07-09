import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar.css'

const Navbar = () => {
  return (
      <nav className='container'>
          <Link to="/" ><h1>&#8962;</h1></Link>
          <ul className='item'>
              <Link to="/about" ><li>About</li></Link>
              <Link to="/profile" ><li>Profile</li></Link>
              <Link to="/shop" ><li>Shop</li></Link>
          </ul>
      </nav>
    )
}

export default Navbar