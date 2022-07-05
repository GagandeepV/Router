import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav>
          <Link to="/" ><h3>Logo</h3></Link>
          <ul>
              <Link to="/about" ><li>About</li></Link>
              <Link to="/access" ><li>Access</li></Link>
          </ul>
      </nav>
    )
}

export default Navbar