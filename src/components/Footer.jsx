import React from 'react'
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa'

export default function Footer() {
    const date =new Date().getFullYear();
  return (
    <div className='bg-[#060d0d] max-w-[100%] mx-auto py-4 px-4 text-gray-300'>
        <h1 className='text-center w-full text-xl font-bold text-[#fff] m-4'>TheAfricaPlanFoundation</h1>
        <p className='py-4 text-center'>
            ©️ Ikem Copyright {date}  
        </p>
        <div className='flex justify-center item-center md:w-[100%] my-7 mx-4 items-center'>
            <FaFacebookSquare size={30} className='m-3' />
            <FaInstagram size={30} className='m-3'/>
            <FaTwitterSquare size={30} className='m-3'/>
        </div>
    </div>
  )
}
