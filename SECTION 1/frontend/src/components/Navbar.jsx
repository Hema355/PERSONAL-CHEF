import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className='header'>

        <li><a id='head' href=""><i class="fa-duotone fa-cauldron fa-shake"></i>Personal Chef</a></li>
        <nav className="navbar">
          <div>

            <input type="search" name="" className="search" placeholder='search here' />
          </div>
          <button className='button'>Search</button>
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