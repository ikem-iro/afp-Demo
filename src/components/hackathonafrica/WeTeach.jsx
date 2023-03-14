import React from 'react'
import Learning from '../../assets/IMG9003.jpg'
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiExpress, SiMongodb } from 'react-icons/si'

export default function WeTeach() {
  return (
    <div className='w-full bg-gray-200 py-20 px-4'>
        <div className='max-w-[1536px] mx-auto grid sm:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <h2 className='md:text-4xl sm:text-3xl text-3xl font-bold py-2 sm:text-left text-center mb-3'>Our Program</h2>
                <h3 className='md:text-3xl sm:text-2xl text-2xl font-bold py-2 sm:text-left text-center mb-1'>Bootcamp</h3>
                <p className='sm:text-left text-center py-1 mb-1'>
                    We currenty run an annual 3-month long fully residential coding bootcamp where participants are taught key 
                    tech skills such as:
                </p>
                <div className='w-[100%] mx-auto grid grid-cols-3 mb-1'>
                    <div className='flex flex-col'>
                        <div className='flex justify-center sm:justify-start items-center'>
                            <h4 className='text-xl font-medium py-2 text-center'>HTML</h4>
                            <FaHtml5 className='pl-2 text-[#f06529]' size={30}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-center sm:justify-start items-center'> 
                            <h4 className='text-xl font-medium py-2 text-center'>CSS</h4>
                            <FaCss3 className='pl-2 text-[#2965f1]' size={30}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex sm:justify-start justify-center items-center'>
                            <h4 className='text-xl font-medium py-2 text-center'>Javascript</h4>
                            <SiJavascript className='pl-2 text-[#f0db4f]' size={30}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex sm:justify-start justify-center items-center'>
                            <h4 className='text-xl font-medium py-2 text-center'>React Js</h4>
                            <FaReact className='pl-2 text-[#88dded]' size={30}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex sm:justify-start justify-center items-center'>
                            <h4 className='text-xl font-medium py-2 text-center'>Node Js</h4>
                            <FaNodeJs className='pl-2 text-[#3c873a]' size={30}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex sm:justify-start justify-center items-center'>
                            <h4 className='text-xl font-medium py-2 text-center'>Express Js</h4>
                            <SiExpress className='pl-2' size={30}/>
                        </div>
                    </div>
                    <div className='flex flex-col col-start-2 col-end-3 sm:col-start-1 sm:col-end-2 mb-1'>
                        <div className='flex sm:justify-start justify-center items-center'>
                            <h4 className='text-xl font-medium py-2 text-center'>Mongo DB</h4>
                            <SiMongodb className='pl-2 text-[#589636]' size={30}/>
                        </div>
                    </div>
                </div>
                <p className='sm:text-left text-center py-1 mb-1'>
                    We also incorporate invaluable soft skills training into our curriculum to develop 
                    team-work, communication, problem solving and leadership.
                </p>
                <h3 className='md:text-3xl sm:text-2xl text-2xl font-bold py-2 sm:text-left text-center mb-2'>Internships</h3>
                <p className='sm:text-left text-center py-1'>
                    Following the completion of the bootcamp, participants undergo internships with our recruiting internship partners.
                </p>
            </div>
            <img className='w-[490px] sm:[550px] md:h-[600px] sm:h-[500px] h-[400px] mx-auto my-4' src={Learning} alt="learning-img" />
        </div>
    </div>
  )
}
