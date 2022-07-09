import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav style={{display:'flex', justifyContent:'space-around'}}>
          <Link to="/" ><h3>Logo</h3></Link>
          <ul style={{listStyleType:'none' ,display:'flex', gap:'1em' }}>
              <Link to="/about" ><li>About</li></Link>
              <Link to="/profile" ><li>Profile</li></Link>
          </ul>
      </nav>
    )
}

export default Navbar