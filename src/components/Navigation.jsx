import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../constants'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'


const Navigation = () => {
    
const [IsOpen, SetIsOpen] = useState(false)
return (

  
  <div className={`flex fixed top-0 left-0 w-full  z-30  ${IsOpen ? 'bg-primary' : 'backdrop-blur-sm '}  items-center justify-between px-[4rem] max-md:px-[1rem] py-4 `}>
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

      <div className={`${IsOpen ? 'flex' : 'hidden'} fixed bg-primary   w-full top-[4rem] left-0  flex-col items-center justify-center `}>
          {navLinks.map((itmes)=>(
              <a onClick={()=>(SetIsOpen(false))} className='text-white text-[20px] mx-3 my-3 p-3 cursor-pointer
               hover:text-blue-300 font-semibold' key={itmes.id} href={itmes.link}>{itmes.title}</a>
          ))}

          
          
      </div>

      <img onClick={()=>SetIsOpen(true)} src={Menu} alt="Menu" className={`${IsOpen ? 'hidden' : 'flex'} flex md:hidden`} width={30}/>
      <img onClick={()=>SetIsOpen(false)} src={Close} alt="close" className={`${IsOpen ? 'flex':'hidden'}`} width={30}/>
      

      
  </div>
  )
}

export default Navigation