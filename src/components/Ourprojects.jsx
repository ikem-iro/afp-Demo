import React from 'react'
import Hackathon from '../assets/OurProjectsjpegs/IMG0240.jpg'
import Sirp from '../assets/OurProjectsjpegs/SIRP1.png'
import SriLanka from '../assets/OurProjectsjpegs/Srilanka1.png'
import VentureClash from '../assets/OurProjectsjpegs/ventureclash2.png'

export default function Ourprojects() {
  return (
    <div id='ourprojects' className='w-full py-20 px-4 bg-white'>
        <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold pt-10 text-center mb-[2rem]'>Our Projects</h2>
        <div className='max-w-[1536px] mx-auto grid md:grid-cols-4 gap-8 sm:grid-cols-2'>
            <div className='bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='mx-auto h-[220px]' src={Hackathon} alt="image from hackathonafrica" />
                <h3 className='text-2xl font-bold text-center py-8'>HackathonAfrica 2022</h3>
                <p className='mb-[3rem] text-center text-xl font-medium'>
                    AfricaPlan Foundation organized a Software Development Bootcamp to empower young people in 
                    Enugu, Nigeria. The Bootcamp was fully residential for immersive learning and all trainees got a 
                    laptop to aid their learning. 20 young people were beneficiaries of this impactful program.
                </p>
            </div>
            <div className='bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='mx-auto h-[220px]' src={Sirp} alt="image from hackathonafrica" />
                <h3 className='text-2xl font-bold text-center py-8'>Society for the Improvement of Rural People (SIRP) Enugu, Nigeria.</h3>
                <p className='mb-[3rem] text-center text-xl font-medium'>
                    We sponsored the training of young girls in underserved communities in Enugu, 
                    Nigeria on menstrual hygiene management and the making of reusable 
                    menstrual pads to tackle period poverty in their communities.
                </p>
            </div>
            <div className='bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='mx-auto h-[220px]' src={SriLanka} alt="image from hackathonafrica" />
                <h3 className='text-2xl font-bold text-center py-8'>Ashrafee Charity Organization for Social Services and Education Development, Sri Lanka.</h3>
                <p className='mb-[3rem] text-center text-xl font-medium'>
                    AfricaPlan Foundation funded a science musuem for the children at the Dhraul Hassanath 
                    Children’s home, Sri Lanka.
                </p>
            </div>
            <div className='bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='mx-auto h-[220px]' src={VentureClash} alt="image from hackathonafrica" />
                <h3 className='text-2xl font-bold text-center py-8'>Venture Clash Lagos (2018).</h3>
                <p className='mb-[3rem] text-center text-xl font-medium'>
                    We brought together Tech Entrepreneurs from all over Nigeria to pitch their ideas for 
                    a chance to win $150,000, as fast pass to the Venture Clash Semi Finals and a $5000 
                    grant to visit Connecticut.
                </p>
            </div>
        </div>
    </div>
  )
}
