import { RiBowlLine, RiCake2Line, RiGlobeLine, RiGobletLine, RiLeafLine, RiLogoutCircleRLine, RiRestaurant2Line, RiRestaurantLine } from '@remixicon/react'
import logo from '../assets/logo.jpeg'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='left-side'>
        <div className="flex flex-col text-center">
            <img src={logo} alt="logo" className='h-11 object-contain' />
            <h3 className='text-2xl font-semibold max-md:hidden'>
                <span className='text-accent'>Eatsy</span>
                {/* <span className='text-orange-500'> Kitchen</span> */}
            </h3>

            <div className="side-menus h-[500px]">
                <NavLink to={`/category-page/confectioneries`} className={ ({isActive})  => { 
                    return isActive ? 'side-menu-active' : 'side-menu' } }>
                    <span><RiCake2Line className='text-orange-400' /></span>
                        <span>Confectioneries</span>
                </NavLink>

                <NavLink to={`/category-page/local`} className={ ({isActive})  => { 
                    return isActive ? 'side-menu-active' : 'side-menu' } }>
                    <span><RiRestaurant2Line className='text-orange-400' /></span>
                        <span>Local</span>
                </NavLink>

                <NavLink to={`/category-page/continental`} className={ ({isActive})  => { 
                    return isActive ? 'side-menu-active' : 'side-menu' } }>
                    <span><RiGlobeLine className='text-orange-400' /></span>
                        <span>Continental</span>
                </NavLink>

                <NavLink to={`/category-page/chinese`} className={ ({isActive})  => { 
                    return isActive ? 'side-menu-active' : 'side-menu' } }>
                    <span><RiBowlLine className='text-orange-400' /></span>
                        <span>Chinese</span>
                </NavLink>

                <NavLink to={`/category-page/vegetarian`} className={ ({isActive})  => { 
                    return isActive ? 'side-menu-active' : 'side-menu' } }>
                    <span><RiLeafLine className='text-orange-400' /></span>
                        <span>Vegetarian</span>
                </NavLink>

                <NavLink to={`/category-page/appetizer`} className={ ({isActive})  => { 
                    return isActive ? 'side-menu-active' : 'side-menu' } }>
                    <span><RiRestaurantLine className='text-orange-400' /></span>
                        <span>Appetizer</span>
                </NavLink>

                <NavLink to={`/category-page/drinks`} className={ ({isActive})  => { 
                    return isActive ? 'side-menu-active' : 'side-menu' } }>
                    <span><RiGobletLine className='text-orange-400' /></span>
                        <span>Drinks</span>
                </NavLink>

            </div>



            <div className="side-menus flex justify-around">
                <div className="side-menu">
                    <span><RiLogoutCircleRLine className='text-orange-400' /></span>
                    <NavLink to={`/`}>Logout</NavLink>
                </div>
            </div>
        </div>
        
    </aside>
  )
}

export default Sidebar