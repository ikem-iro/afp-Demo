import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import {IoEarth} from 'react-icons/io5'
import { HashLink as Link } from 'react-router-hash-link'


export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }
    const closeMobileMenu = () =>{
        setNav(!nav)
    }
  return (
    <div className='fixed bg-[#000300] flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white left-0 right-0 top-0 z-10'>
        <Link smooth to='/#'>
            <div className='flex justify-between cursor-pointer'>
                <h1 className='p-4 w-full text-3xl font-bold text-[#fff]'>TheAfricaPlanFoundation</h1>
                <IoEarth className='w-full mt-5' size={30}/>
            </div>
        </Link>
        <ul className='hidden md:flex'>
            <Link smooth to='/#aboutus'>
                <li className='w-32 p-4 text-center cursor-pointer'>About Us</li>
            </Link>
            <Link smooth to='/#whatwedo'>
                <li className='w-32 p-4 text-center cursor-pointer'>What We Do</li>
            </Link>
            <Link smooth to='/#ourprojects'>
                <li className='w-32 p-4 text-center cursor-pointer'>Our Projects</li>
            </Link>
            <Link smooth to='/#contactus'>
                <li className='w-32 p-4 text-center cursor-pointer'>Contact Us</li>
            </Link>
            <Link smooth to='/hackathonafrica#hero'>
                <li className='w-40 p-4 text-center cursor-pointer'>Hackathon Africa</li>
            </Link>
            <Link smooth to='/blog'>
                <li className='w-32 p-4 text-center cursor-pointer'>Blog</li>
            </Link>
        </ul>
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
        </div>
        <div className={ nav ? 'fixed left-0 top-0  h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]' } >
            <Link smooth to='/#' onClick={closeMobileMenu}>
            <div className='flex justify-between mt-3'> 
                <h1 className='w-full text-3xl font-bold text-[#fff] m-4'>TheAfricaPlanFoundation</h1>
                <IoEarth className='w-full m-5' size={30}/>
            </div>
            </Link>
            <ul className='uppercase p-4'>
                <Link smooth to='/#aboutus' onClick={closeMobileMenu}>
                    <li className='p-4 border-b border-gray-600 cursor-pointer'>About Us</li>
                </Link>
                <Link smooth to='/#whatwedo'onClick={closeMobileMenu} >
                    <li className='p-4 border-b border-gray-600 cursor-pointer'>What We Do</li>
                </Link>
                <Link smooth to='/#ourprojects'onClick={closeMobileMenu} > 
                    <li className='p-4 border-b border-gray-600 cursor-pointer'>Our Projects</li>
                </Link>
                <Link smooth to='/#contactus'onClick={closeMobileMenu} >
                    <li className='p-4 border-b border-gray-600 cursor-pointer'>Contact Us</li>
                </Link>
                <Link smooth to='/hackathonafrica#hero'onClick={closeMobileMenu} >
                    <li className='p-4 border-b border-gray-600 cursor-pointer'>Hackathon Africa</li>
                </Link>
                <Link smooth to='/blog'onClick={closeMobileMenu} >
                    <li className='p-4 cursor-pointer'>Blog</li>
                </Link>                
            </ul>
        </div>
    </div>
  )
}
