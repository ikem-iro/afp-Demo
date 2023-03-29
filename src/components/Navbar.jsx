import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import {IoEarth} from 'react-icons/io5'
import { HashLink as Link } from 'react-router-hash-link'


export default function Navbar() {
    let Links = [
        {name : 'About Us', link:'/#aboutus'},
        {name : 'What We Do', link:'/#whatwedo'},
        {name : 'Our Projects', link:'/#ourprojects'},
        {name : 'Contact Us', link:'/#contactus'},
        {name : 'Hackathon Africa', link:'/hackathonafrica#hero'},
        // {name : 'Blog',}
    ];

    const [open, setOpen] = useState(false);
    const closeMobileMenu = () => {
        if(!open) return;
        else setOpen(!open)
    }
    const [isMedium, setIsMedium] = useState({
        winwidth : window.innerWidth
    });
    const detectSize = () => {
        setIsMedium({
            winwidth : window.innerWidth
        })
    }

    useEffect(() => {
            window.addEventListener('resize', detectSize);

            return () => {
                window.removeEventListener('resize', detectSize)
            }
    }, [isMedium])


    return(
        <div className='shadow-md w-full fixed top-0 left-0 z-10'>
            <div className=' md:flex md:items-center md:justify-between bg-[#060D0D] py-4 md:px-10 px-7'>
                <div className='flex justify-between item-center'>
                    <Link onClick={closeMobileMenu} to='/#' className='font-bold text-3xl pr-73 text-[#fff] cursor-pointer'>
                        {isMedium.winwidth <= 767 ?  <span className='pt-2 text-3xl font-bold text-[#fff]'><IoEarth className='text-3xl text-[#FFD300] pt-2' size={40} /></span> : <h1 className='p-4 w-full text-3xl font-bold text-[#fff]'>TheAfricaPlanFoundation</h1>}
                    </Link>
                    <div onClick={()=> setOpen(!open)} className={`text-white ${isMedium.winwidth <= 767 ? 'mt-1' : 'mt-5'} md:hidden block cursor-pointer`}>
                    {open ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={35} />}
                    </div>
                </div>
                <ul 
                    className={`md:flex md:items-center 
                    md:pb-0 pb-12 absolute md:static 
                    bg-[#060d0d] md:z-auto z-[-1] left-0 w-full 
                    md:w-auto md:pl-0 pl-9 transition-all duration-500 
                    ease-in ${open ? 'top-19 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
                   {Links.map((link) => (
                    <Link key={link.name} smooth={true}  to={link.link}>
                        <li  onClick={closeMobileMenu} className='text-[#fff] md:ml-8 text-xl md:my-0 my-7 hover:text-gray-400 duration-500 '>
                            {link.name}
                        </li>
                    </Link>
                   ))}
                </ul>
            </div>

        </div>
    ) 
}


// const [nav, setNav] = useState(false);

// const handleNav = () => {
//     setNav(!nav)
// }
// const closeMobileMenu = () =>{
//     setNav(!nav)
// }
// return (
// <div className='fixed bg-[#000300] flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white left-0 right-0 top-0 z-10'>
//     <Link smooth to='/#'>
//         <div className='flex justify-between cursor-pointer'>
//             <h1 className='p-4 w-full text-3xl font-bold text-[#fff]'>TheAfricaPlanFoundation</h1>
//             <IoEarth className='w-full mt-5' size={30}/>
//         </div>
//     </Link>
//     <ul className='hidden md:flex'>
//         <Link smooth to='/#aboutus'>
//             <li className='w-32 p-4 text-center cursor-pointer'>About Us</li>
//         </Link>
//         <Link smooth to='/#whatwedo'>
//             <li className='w-32 p-4 text-center cursor-pointer'>What We Do</li>
//         </Link>
//         <Link smooth to='/#ourprojects'>
//             <li className='w-32 p-4 text-center cursor-pointer'>Our Projects</li>
//         </Link>
//         <Link smooth to='/#contactus'>
//             <li className='w-32 p-4 text-center cursor-pointer'>Contact Us</li>
//         </Link>
//         <Link smooth to='/hackathonafrica#hero'>
//             <li className='w-40 p-4 text-center cursor-pointer'>Hackathon Africa</li>
//         </Link>
//         <Link smooth to='/blog'>
//             <li className='w-32 p-4 text-center cursor-pointer'>Blog</li>
//         </Link>
//     </ul>
//     <div onClick={handleNav} className='block md:hidden cursor-pointer'>
//         {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
//     </div>
//     <div className={ nav ? 'fixed left-0 top-0  h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]' } >
//         <Link smooth to='/#' onClick={closeMobileMenu}>
//         <div className='flex justify-between mt-3'> 
//             <h1 className='w-full text-3xl font-bold text-[#fff] m-4'>TheAfricaPlanFoundation</h1>
//             <IoEarth className='w-full m-5' size={30}/>
//         </div>
//         </Link>
//         <ul className='uppercase p-4'>
//             <Link smooth to='/#aboutus' onClick={closeMobileMenu}>
//                 <li className='p-4 border-b border-gray-600 cursor-pointer'>About Us</li>
//             </Link>
//             <Link smooth to='/#whatwedo'onClick={closeMobileMenu} >
//                 <li className='p-4 border-b border-gray-600 cursor-pointer'>What We Do</li>
//             </Link>
//             <Link smooth to='/#ourprojects'onClick={closeMobileMenu} > 
//                 <li className='p-4 border-b border-gray-600 cursor-pointer'>Our Projects</li>
//             </Link>
//             <Link smooth to='/#contactus'onClick={closeMobileMenu} >
//                 <li className='p-4 border-b border-gray-600 cursor-pointer'>Contact Us</li>
//             </Link>
//             <Link smooth to='/hackathonafrica#hero'onClick={closeMobileMenu} >
//                 <li className='p-4 border-b border-gray-600 cursor-pointer'>Hackathon Africa</li>
//             </Link>
//             <Link smooth to='/blog'onClick={closeMobileMenu} >
//                 <li className='p-4 cursor-pointer'>Blog</li>
//             </Link>                
//         </ul>
//     </div>
// </div>
