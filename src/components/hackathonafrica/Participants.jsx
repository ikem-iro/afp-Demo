import React from 'react'
import Card from './Card'
import participants from '../../Data/students.json'

export default function Participants() {
  return (
    <div id='students' className='w-full py-20 px-4 bg-white'>
        <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center mb-[2rem]'>Testimonials</h2>
        <div className='max-w-[1536px] mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8'>
            {participants.map( (participant, participantKey) => (
                <div key={participantKey} className='bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg'>
                    <Card {...participant}/>
                </div>
            ))}
        </div>
        
    </div>
  )
}
