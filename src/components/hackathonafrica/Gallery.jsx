import React, { useEffect, useState } from 'react'
import slides from '../../Data/testimonial.json'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'

export default function Gallery() {
  const [slide, setSlide] = useState(0);
  const length = slides.length
  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1)
  }

  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1)
  }
  return (
    <div className='w-full bg-[#000300] py-20 px-4'>
      <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center text-white'>Gallery</h2>
    <div className='max-w-[1536px] mx-auto px-4 py-20 group relative flex justify-center items-center'>
      <MdKeyboardDoubleArrowLeft onClick={prevSlide} className='hidden group-hover:block absolute top-[50%] text-white/70 cursor-pointer left-5' size={50}/>
      <MdKeyboardDoubleArrowRight onClick={nextSlide} className='hidden group-hover:block absolute top-[50%] text-white/70 cursor-pointer right-5' size={50}/>
      {slides.map((item, index) =>(
        <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
          {index === slide &&  (<img className='md:w-full md:h-full rounded-md duration-500' src={item.imgUrl} alt="/" height='780px' width='1536px' />)}
        </div>
      ))}
    </div>
    </div>
  )
}
