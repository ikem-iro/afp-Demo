import React, { useEffect, useRef, useState } from 'react'
import slides from '../../Data/testimonial.json'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'



let count = 0;
let slideInterval;
export default function Gallery() {
  const slideRef = useRef();
  const [slide, setSlide] = useState(0);
  const length = slides.length
  function prevSlide () {
    count = ( slide + (length - 1) ) % length;
    setSlide(count);
    slideRef.current.classList.add('fade-anim');
  }

  function nextSlide () {
    count = ( count + 1 ) % length;
    setSlide(count);
    slideRef.current.classList.add('fade-anim');
  }

  function startSlider () {
    slideInterval = setInterval(()=>{
        nextSlide();
    },10000)
  }

  function pauseSlider (){
    clearInterval(slideInterval);
}


  function removeAnimation () {
    slideRef.current.classList.remove('fade-anim')
  }

  useEffect(()=>{
      slideRef.current.addEventListener("animationend", removeAnimation);
      slideRef.current.addEventListener("mousedown", pauseSlider);
      slideRef.current.addEventListener("mouseup", startSlider);
      startSlider();

      return () => {
        pauseSlider()
      }
  },[]);

  return (
    <div className='w-full bg-[#060d0d] py-20 px-4'>
      <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center text-white'>Gallery</h2>
    <div ref={slideRef} className='max-w-[1536px] mx-auto px-4 py-20 group relative flex justify-center items-center'>
      <MdKeyboardDoubleArrowLeft onClick={prevSlide} className='hidden group-hover:block absolute top-[50%] text-white/70 cursor-pointer left-5' size={50}/>
      <MdKeyboardDoubleArrowRight onClick={nextSlide} className='hidden group-hover:block absolute top-[50%] text-white/70 cursor-pointer right-5' size={50}/>
      {slides.map((item, index) =>(
        <div key={index}>
          {index === slide &&  (<img className='w-full h-full md:h-[780px] rounded-md duration-500' src={item.imgUrl} alt="/" height='780px' width='1536px' />)}
        </div>
      ))}
    </div>
    </div>
  )
}
