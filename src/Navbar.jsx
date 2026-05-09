import React from 'react'
import logoImage from './assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  // let  date1 = new Date().toLocaleDateString()
  

  return (
    <>
       <div className="header">
        <div className="logo">
            <img src={logoImage} alt="" />
            <h2>Alxikma Electronics</h2>
        </div>
        <div className="nav">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/about'>About</Link></li>
            {/* <li><a href="#"></a></li> */}
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <button>Contact</button>
       </div>
    </>
  )
}

export default Navbar