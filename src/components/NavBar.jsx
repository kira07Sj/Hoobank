import React from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../constants'
import Menu from '../assets/menu.svg'


const Navbar = () => {
  return (
    <nav className='flex fixed top-0 left-0 w-full  z-30 backdrop-blur-sm  items-center justify-between px-[4rem] max-md:px-[1rem] py-4 '>
      <a href="#Home" className='flex items-center gap-2 flex-row justify-center'>
         <img src={logo} alt="logo" width={40} />
            <h1 className='text-white text-[2rem] max-md:text-[1.7rem]  font-bold'>Hoobank</h1>
          </a>

        <div className={`flex flex-row items-center justify-center  max-md:hidden`}>
            {navLinks.map((itmes)=>(
                <a className='text-white text-[20px] mx-3 cursor-pointer
                 hover:text-blue-300 font-semibold' key={itmes.id} href={itmes.link}>{itmes.title}</a>
            ))}
        </div>

        <img src={Menu} alt="Menu" className='flex md:hidden' width={30}/>

        <div className={`flex flex-col items-center justify-center  max-md:hidden`}>
            {navLinks.map((itmes)=>(
                <a className='text-white text-[20px] mx-3 cursor-pointer
                 hover:text-blue-300 font-semibold' key={itmes.id} href={itmes.link}>{itmes.title}</a>
            ))}
        </div>
    </nav>
  )
}

export default Navbar
