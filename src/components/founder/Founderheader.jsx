import React from 'react'
import MrOni from '../../assets/MrOni.jpeg'


export default function Founderheader() {
  return (
    <div id='founderhead' className='w-full bg-gray-200 py-20 px-4'>
        <div className='max-w-[1536px] mt-20 mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
                <h2 className='md:text-5xl sm:text-4xl text-3xl font-bold mb-5 py-2 text-center sm:text-left'>Note From Our Founder</h2>
                <p className='text-left sm:text-left sm:mb-8 font-medium mb-5 text-2xl'>
                  <strong>"</strong>When I started out more than two decades ago, opportunities requiring no digital skills existed in diverse sectors. 
                  The share of jobs with digital skills requirements was a little above 10%, even in the developed world. However, advances in technology, especially in software 
                  development have disrupted virtually every industry resulting in a greater disadvantage for any economy without sufficient or commensurate digital skills to meet
                  industry needs.<strong>"</strong>
                </p>
                <p className='text-left sm:text-left sm:mb-8 font-bold text-2xl'>
                  <em>Mr. Oni Chukwu – Founder, AfricaPlan Foundation</em>
                </p>
              </div>
              <img className='w-[550px] h-[600px] mx-auto my-4' src={MrOni} alt='Mr-Oni' />
        </div>
    </div>
  )
}
