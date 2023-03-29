import React, { useEffect, useRef, useState } from 'react'
import learning from '../../Data/learning.json'
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiExpress, SiMongodb } from 'react-icons/si'

let slideInterval
export default function WeTeach() {
    
    const [slide, setSlide] = useState(0);
    const slideRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            nextSlide();
        },10000)
        return () => {
            pauseSlider()
        }
    })

    function pauseSlider (){
        clearInterval(slideInterval);
    }
    const length = learning.length  
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
        slideRef.current.classList.add('fade-anim');
    }
  
  return (
    <div className='w-full bg-gray-200 py-20 px-4'>
         <div className='max-w-[1200px] mx-auto drop-shadow-2xl'>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-100">
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <h2 className='md:text-4xl sm:text-3xl text-3xl font-bold py-2 sm:text-justify text-center mb-3'>Our Program</h2>
                    <h3 className='md:text-3xl sm:text-2xl text-2xl font-bold py-2 sm:text-justify text-center mb-1'>Bootcamp</h3>
                    <blockquote>
                        <p className="text-lg font-medium text-justify">
                            We currenty run an annual 3-month long fully residential coding bootcamp where participants are taught key 
                            tech skills such as:
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className='w-[100%] mx-auto grid grid-cols-2 sm:grid-cols-3 mb-1'>
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
                                    <h4 className='text-xl font-medium py-2 text-center'>ReactJs</h4>
                                    <FaReact className='pl-2 text-[#88dded]' size={30}/>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex sm:justify-start justify-center items-center'>
                                    <h4 className='text-xl font-medium py-2 text-center'>NodeJs</h4>
                                    <FaNodeJs className='pl-2 text-[#3c873a]' size={30}/>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex sm:justify-start justify-center items-center'>
                                    <h4 className='text-xl font-medium py-2 text-center'>ExpressJs</h4>
                                    <SiExpress className='pl-2' size={30}/>
                                </div>
                            </div>
                            <div className='flex flex-col col-start-1 col-span-2 sm:col-start-1 sm:col-end-2 mb-1'>
                                <div className='flex sm:justify-start justify-center items-center'>
                                    <h4 className='text-xl font-medium py-2 text-center'>MongoDB</h4>
                                    <SiMongodb className='pl-2 text-[#589636]' size={30}/>
                                </div>
                            </div>
                        </div>
                    </figcaption>
                    <blockquote>
                        <p className="text-lg text-justify font-medium">
                            We also incorporate invaluable soft skills training into our curriculum to develop 
                            team-work, communication, problem solving and leadership.
                        </p>
                    </blockquote>
                    <h3 className='md:text-3xl sm:text-2xl text-2xl font-bold py-2 sm:text-justify text-center mb-2'>Internships</h3>
                    <blockquote>
                        <p className="text-lg text-justify font-medium">
                            Following the completion of the bootcamp, participants undergo internships with our recruiting internship partners.
                        </p>
                    </blockquote>
                </div>
                <div ref={slideRef} className='group w-full h-full mx-auto px-4 py-20 relative flex justify-center items-center'>
                    {learning.map((item, index) => (
                        <div key={index}>
                            {index === slide &&  (<img className='rounded-md  sm:w-[500px] sm:h-[450px] h-[390px] w-[430px]' src={item.imgUrl} alt="/" />)}
                        </div>
                    ))}
                </div>
            </figure> 
        </div>
    </div>
  )
}




{/* <img className='w-[490px] sm:[550px] md:h-[600px] sm:h-[500px] h-[400px] mx-auto my-4' src={Learning} alt="learning-img" /> */}

{/* <div className='max-w-[1024px] mx-auto drop-shadow-2xl'>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-100">
                <img className="w-[330px] h-[330px] md:w-[550px] md:h-[611px] md:rounded-md rounded-full mx-auto" src={MrOni} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center md:text-left'>Note From Our Founder</h2>
                    <blockquote>
                        <p className="text-lg font-medium">
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
        </div> */}



{/* <div className='max-w-[1536px] mx-auto grid sm:grid-cols-2'>
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
                            <h4 className='text-xl font-medium py-2 text-center'>ReactJs</h4>
                            <FaReact className='pl-2 text-[#88dded]' size={30}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex sm:justify-start justify-center items-center'>
                            <h4 className='text-xl font-medium py-2 text-center'>NodeJs</h4>
                            <FaNodeJs className='pl-2 text-[#3c873a]' size={30}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex sm:justify-start justify-center items-center'>
                            <h4 className='text-xl font-medium py-2 text-center'>ExpressJs</h4>
                            <SiExpress className='pl-2' size={30}/>
                        </div>
                    </div>
                    <div className='flex flex-col col-start-2 col-end-3 sm:col-start-1 sm:col-end-2 mb-1'>
                        <div className='flex sm:justify-start justify-center items-center'>
                            <h4 className='text-xl font-medium py-2 text-center'>MongoDB</h4>
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
            <div className='group w-full h-full mx-auto px-4 py-20 relative flex justify-center items-center'>
                {learning.map((item, index) => (
                    <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
                        {index === slide &&  (<img className='shadow-2xl shadow-slate-200/90 rounded-md ease-linear w-[500px] sm:h-[450px] h-[400px]' src={item.imgUrl} alt="/" />)}
                    </div>
                ))}
            </div>
        </div> */}