import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import { RiUser2Fill } from '@remixicon/react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="nav-menus">
          <NavLink to={`/categories`} className='nav-menu'>About</NavLink>
          <NavLink to={`/categories`} className='nav-menu'>Contact</NavLink>
        </div>

        <div className="nav-menu cursor-pointer">
            <RiUser2Fill />
        </div>

    </nav>
  )
}

export default Navbar