import React, { useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  
  return (
    <div>
      <header className='header'>

        <li><Link id='head' to="/"><i class="fa-duotone fa-cauldron fa-shake"></i>Personal Chef</Link></li>
        <li><Link to="/browse"><i class="fa-duotone fa-cauldron fa-shake"></i>Browse Recipies</Link></li>
        <nav className="navbar">
          
          <ul>
            <li><NavLink to="Signup"><i class="fa-sharp fa-solid fa-user-plus"></i></NavLink></li>
            <li><NavLink to="Login"><i class="fa-solid fa-user"></i></NavLink></li>
            <li><NavLink to="Notification"><i class="fa-sharp fa-solid fa-bell"></i></NavLink></li>
            <li><NavLink to="Setting"><i class="fa-solid fa-gear"></i></NavLink></li>
            <li><NavLink to="/"></NavLink></li>


          </ul>
        </nav>

      </header>
    </div>
  )
}

export default Navbar