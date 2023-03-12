import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function Hero() {
  return (
    <div id='hero' className='text-white'>
        <div style={{backgroundImage : `url('/IMG-20221.jpg')`}}  className='bg-cover bg-blend-overlay bg-black/50 bg-top max-w-[100%] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 mb-6'>Hackathon Africa</h1>
            <p className='text-[#fff] font-bold p-2'>...Creating opportunities for young people to thrive</p>
              <button className='bg-white text-black rounded-md font-medium w-[300px] mx-auto my-6 px-6 py-3'>
                <Link smooth to='/hackathonafrica/#students'>
                  Testimonials
                </Link>
              </button>    
        </div>
    </div>
  )
}