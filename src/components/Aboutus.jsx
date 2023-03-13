import React, { useEffect, useState } from 'react'
import photos from '../Data/about-us.json'


export default function Aboutus() {
    const [slide, setSlide] = useState(0);

  useEffect(() => {
    setTimeout(()=>{
      nextSlide();
    },10000)
  })


    const length = photos.length  
    const nextSlide = () => {
      setSlide(slide === 0 ? length - 1 : slide - 1)
    }

  return (
    <div id='aboutus' className='w-full bg-gray-200 py-20 px-4'>
        <div className='max-w-[1536px] mx-auto grid md:grid-cols-2 sm:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center sm:text-left'>About Us</h2>
                <p className='text-center sm:text-left sm:mb-8'>
                    Since inception, the foundation has spearheaded and supported start-up entrepreneurship programs in Nigeria, STEM education programs for inner city
                    girls in the US, US based International Refugee resettlement programs, as well 
                    as critical education and development support for orphanages in parts of Nepal and Srii Lanka..
                </p>
                <h3 className='md:text-3xl sm:text-2xl text-xl font-bold py-2 sm:text-left text-center'>Our Values</h3>
                <div className='flex justify-center items-center sm:justify-start'>
                    <p className='p-2'>Impact.</p>
                    <p className='p-4'>Innovation.</p>
                    <p className='p-4'>Inclusion.</p>
                </div>
                <h4 className='md:text-3xl sm:text-2xl text-xl font-bold py-2 sm:text-left text-center'>Vision</h4>
                <p className='mb-5 text-center sm:text-left md:text-left'>To enable underprivileged African youth reach their life's full potential and become key contributors to their communities</p>
                <h4 className='md:text-3xl sm:text-2xl text-xl font-bold py-2 sm:text-left text-center'>Mission</h4>
                <p className='mb-5 text-center sm:text-left md:text-left'>
                    To meaningfully empower African youth by providing pathways to successful careers in the burgeoning technology fields
                    as well as supporting access to reproductive health education and menstrual hygiene products for women and girls in developing countries.
                </p>
                </div>
                <div className='max-w-full mx-auto px-4 py-20 relative flex justify-center items-center'>
                    {photos.map((item, index) =>(
                        <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
                            {index === slide &&  (<img className='rounded-md ease-linear h-[408px] w-[612px]' src={item.imgUrl} alt="/" />)}
                        </div>
                    ))}
                </div>
        </div>
    </div>
  )
}
