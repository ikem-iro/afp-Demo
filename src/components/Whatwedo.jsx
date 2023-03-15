import React from 'react';
import BoyAndGirl  from '../assets/Icons/boy-and-girl.png';
import Chemistry  from '../assets/Icons/chemistry.png'
import Partnership from '../assets/Icons/partnership-handshake.png'
import SWD from '../assets/Icons/software-development.png'

export default function Whatwedo() {
  return (
    <div id='whatwedo' className='text-white w-full bg-[#060d0d] py-16 px-4'>
        <div className='max-w-[1536px] mx-auto py-10'>
            <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>What We Do</h2>
            <div className='max-w-[1536px] mx-auto grid md:grid-cols-4 sm:grid-cols-4 grid-cols-2'>
                <div className='mx-auto my-4'>
                    <img className='w-[100px] h-[100px] mx-auto my-4 hover:animate-[bounce_1.5s_ease-out]' src={BoyAndGirl} alt="boy-and-girl" />
                    <p className='text-center'>Youth Empowerment</p>
                </div>
                <div className='mx-auto my-4'>
                    <img className='w-[100px] h-[100px] mx-auto my-4 hover:animate-[bounce_1.5s_ease-out]' src={Chemistry} alt='chemistry'/>
                    <p className='text-center'>STEM</p>
                </div>
                <div className='mx-auto my-4'>
                    <img className='w-[100px] h-[100px] mx-auto my-4 hover:animate-[bounce_1.5s_ease-out]' src={Partnership} alt="handshake" />
                    <p className='text-center'>Start Up Support</p>
                </div>
                <div className='mx-auto my-4'>
                    <img className='w-[100px] h-[100px] mx-auto my-4 hover:animate-[bounce_1.5s_ease-out]' src={SWD} alt="code-tags" />
                    <p className='text-center'>Software Development Training</p>
                </div>
            </div>
        </div>
    </div>
  )
}
