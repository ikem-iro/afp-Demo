import React, { useEffect, useRef, useState } from 'react'
import photos from '../Data/about-us.json'

let slideInterval;
export default function Aboutus() {
    const [slide, setSlide] = useState(0);
    const slideRef = useRef();

  useEffect(() => {
    setTimeout(()=>{
      nextSlide();
    },10000)
    return () => {
      pauseSlider();
    }
  })

  function pauseSlider (){
    clearInterval(slideInterval);
}
    const length = photos.length  
    const nextSlide = () => {
      setSlide(slide === 0 ? length - 1 : slide - 1);
      slideRef.current.classList.add('fade-anim');
    }

  return (
    <div id='aboutus' className='w-full bg-gray-200 py-20 px-4'>
        <div className='max-w-[1536px] mx-auto grid md:grid-cols-2 sm:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center sm:text-justify'>About Us</h2>
                <p className='text-justify sm:mb-8'>
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
                <p className='mb-5 text-justify sm:text-left md:text-left'>To enable underprivileged African youth reach their life's full potential and become key contributors to their communities</p>
                <h4 className='md:text-3xl sm:text-2xl text-xl font-bold py-2 sm:text-left text-center'>Mission</h4>
                <p className='mb-5 text-justify sm:text-left md:text-left'>
                    To meaningfully empower African youth by providing pathways to successful careers in the burgeoning technology fields
                    as well as supporting access to reproductive health education and menstrual hygiene products for women and girls in developing countries.
                </p>
                </div>
                <div ref={slideRef} className='group w-full h-full mx-auto px-4 py-20 relative flex justify-center items-center'>
                    {photos.map((item, index) =>(
                        <div key={index}>
                            {index === slide &&  (<img className='rounded-md ease-linear sm:h-[408px] sm:w-[612px]' src={item.imgUrl} alt="/" />)}
                        </div>
                    ))}
                </div>
        </div>
    </div>
  )
}
