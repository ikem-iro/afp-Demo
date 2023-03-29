import React from 'react'
import { HashLink as Link} from 'react-router-hash-link'
import MrOni from '../../assets/MrOni.jpeg'

export default function Ourfounder() {
  return (
    <div id='ourfounder' className='w-full bg-gray-200 py-20 px-4'>
        <div className='max-w-[1024px] mx-auto drop-shadow-2xl'>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-100">
                <img className="w-[330px] h-[330px] md:w-[550px] md:h-[611px] md:rounded-md rounded-full mx-auto" src={MrOni} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center md:text-left'>A Note From Our Founder</h2>
                    <blockquote>
                        <p className="text-lg text-justify font-medium">
                            The common saying that talent is equally distributed, but opportunity is not, appears to resonate more in Africa than in any other part of the emerging market. Advances in software technology have changed and continue to change the world, redefining the workplace and redistributing opportunities in unprecedented ways.
                            However, this evolving reality seemed to have been lost on the continent as it faces the deepest digital skills gap globally. The implication is that, despite abundant talents, the lack of digital skills continues to stifle opportunities in an age where it is estimated that more than 70% of jobs over the next decade, according to a recent study by Oxford Economics, require advanced digital skills. 
                            When I started out more than two decades ago, opportunities requiring no digital skills existed in diverse …
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <button className='bg-[#FFD300] text-white rounded-md font-medium w-[250px] mx-auto sm:mx-0 my-6 px-6 py-3'>
                            <Link smooth to='/foundersnote#founderhead' className='px-7 py-3'>
                                Read More
                            </Link>
                        </button>
                    </figcaption>
                </div>
            </figure> 
        </div>
    </div>
  )
}






{/* <div className='max-w-[1536px] mx-auto grid sm:grid-cols-2 md:grid-cols-2'>
            <img className='w-[550px] md:h-[600px] mx-auto my-4 sm:h-[530px] h-[550px]' src={MrOni} alt='Mr-Oni' />
            <div className='px-5 flex flex-col justify-center'>
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center sm:text-left'>Note From Our Founder</h2>
                <p className='text-center sm:text-left sm:mb-8'>
                    The common saying that talent is equally distributed, but opportunity is not, appears to resonate more in Africa than in any other part of the emerging market. Advances in software technology have changed and continue to change the world, redefining the workplace and redistributing opportunities in unprecedented ways.
                    However, this evolving reality seemed to have been lost on the continent as it faces the deepest digital skills gap globally. The implication is that, despite abundant talents, the lack of digital skills continues to stifle opportunities in an age where it is estimated that more than 70% of jobs over the next decade, according to a recent study by Oxford Economics, require advanced digital skills. 
                    When I started out more than two decades ago, opportunities requiring no digital skills existed in diverse …
                </p>
                    <button className='bg-[#FFD300] text-white rounded-md font-medium w-[250px] mx-auto sm:mx-0 my-6 px-6 py-3'>
                        <Link smooth to='/foundersnote#founderhead' className='px-7 py-3'>
                            Read More
                        </Link>
                    </button>
            </div>
        </div> */}