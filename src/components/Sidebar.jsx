import { RiCake2Line, RiRestaurant2Line, RiTable3 } from '@remixicon/react'
import logo from '../assets/logo.jpeg'
import logo1 from '../assets/logo1.jpeg'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='left-side'>
        <div className="flex flex-col text-center gap-4">
            <img src={logo} alt="logo" className='h-11 object-contain' />
            <h3 className='text-2xl font-semibold max-md:hidden'>
                <span className='text-indigo-600'>Sizzling</span>
                <span className='text-orange-500'> Place</span>
            </h3>

            <div className="side-menus">

                <div className="side-menu">
                    <span><RiCake2Line className='text-orange-400' /></span>
                    <NavLink to={`/categories`}>Confectioneries</NavLink>
                </div>

                <div className="side-menu">
                    <span><RiRestaurant2Line className='text-orange-400' /></span>
                    <NavLink to={`/`}>Breakfast</NavLink>
                </div>

                <div className="side-menu">
                    <span><RiRestaurant2Line className='text-orange-400' /></span>
                    <NavLink to={`/`}>Lunch</NavLink>
                </div>

                <div className="side-menu">
                    <span><RiRestaurant2Line className='text-orange-400' /></span>
                    <NavLink to={`/`}>First Course</NavLink>
                </div>

                <div className="side-menu">
                    <span><RiRestaurant2Line className='text-orange-400' /></span>
                    <NavLink to={`/`}>Three Course</NavLink>
                </div>

                <div className="side-menu">
                    <span><RiTable3 className='text-orange-400' /></span>
                    <NavLink to={`/`}>Buffet</NavLink>
                </div>
            </div>
        </div>
        
    </aside>
  )
}

export default Sidebar