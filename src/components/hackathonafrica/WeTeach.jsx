import React from 'react'
import Learning from '../../assets/IMG9003.jpg'
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiExpress, SiMongodb } from 'react-icons/si'

export default function WeTeach() {
  return (
    <div className='w-full bg-gray-200 py-20 px-4'>
        <div className='max-w-[1536px] mx-auto grid sm:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center mb-5'>We Teach</h2>
                <div className='flex justify-center items-center'>
                    <h3 className='md:text-3xl sm:text-2xl text-xl font-medium py-2 text-center'>HTML</h3>
                    <FaHtml5 className='pl-2' size={40}/>
                </div>
                <div className='flex justify-center items-center'> 
                    <h3 className='md:text-3xl sm:text-2xl text-xl font-medium py-2 text-center'>CSS</h3>
                    <FaCss3 className='pl-2' size={40}/>
                </div>
                <div className='flex justify-center items-center'>
                    <h3 className='md:text-3xl sm:text-2xl text-xl font-medium py-2 text-center'>Javascript</h3>
                    <SiJavascript className='pl-2' size={40}/>
                </div>
                <div className='flex justify-center items-center'>
                    <h3 className='md:text-3xl sm:text-2xl text-xl font-medium py-2 text-center'>React Js</h3>
                    <FaReact className='pl-2' size={40}/>
                </div>
                <div className='flex justify-center items-center'>
                    <h3 className='md:text-3xl sm:text-2xl text-xl font-medium py-2 text-center'>Node Js</h3>
                    <FaNodeJs className='pl-2' size={40}/>
                </div>
                <div className='flex justify-center items-center'>
                    <h3 className='md:text-3xl sm:text-2xl text-xl font-medium py-2 text-center'>Express Js</h3>
                    <SiExpress className='pl-2' size={40}/>
                </div>
                <div className='flex justify-center items-center'>
                    <h3 className='md:text-3xl sm:text-2xl text-xl font-medium py-2 text-center'>Mongo DB</h3>
                    <SiMongodb className='pl-2' size={40}/>
                </div>
            </div>
            <img className='w-[550px] md:h-[600px] sm:h-[500px] mx-auto my-4' src={Learning} alt="learning-img" />
        </div>
    </div>
  )
}
