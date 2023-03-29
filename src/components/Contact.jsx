import React, { useState } from 'react'
import { BsPhone } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import axios from 'axios'

export default function Contact() {

    const [ contact, setContact ] = useState({
        name : '',
        email : '',
        message : ''
    });
    const [ successMsg, setSuccessMsg ] = useState('');
    const [ errMsg, setErrMsg ] = useState('');
    
    function updateContact (event) {
        const { name, value } = event.target;
        setContact(prevValue => ({
            ...prevValue,
            [ name ] : value
        }));
    }

    const posturl = import.meta.env.VITE_REACT_CONTACT_URI

    async function handleSubmit (e) {
        // console.log(contact);
        e.preventDefault();
        try{
            const response = await axios.post(posturl , contact, {
                headers : { 'Content-Type' : 'application/json'}
            });
            console.log(response.data);
            setSuccessMsg("Successfully sent! ✅");
            setContact({
                name: '',
                email : '',
                message : ''
            });
            setTimeout(()=>{
                setSuccessMsg('')
            },5000)
        }catch(err){
            if(!err?.response){
                setErrMsg("No Server Resonse ❌");
            }else if(err.response ?.status === 400){
                setErrMsg('Failed to send message ❌')
            }
            setTimeout(()=>{
                setErrMsg('');
            },5000);
        }
    }

  return (
    <div id='contactus' className='bg-[#060d0d] w-full py-16 text-white px-4'>
        <div className='max-w-[1536px] mx-auto grid md:grid-cols-2'>
           <div className='lg:col-span-1 px-4'>  
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center sm:text-justify mb-3'>Get In Touch With Us</h2>
                <p className='mb-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, totam quibusdam? Numquam, eos illum. Consequuntur facere ea impedit alias obcaecati.</p>
                <div className='w-[100%] mx-auto grid grid-cols-1 sm:grid-cols-3'>
                    <div className='mt-5 mb-4 items-center flex flex-col p-4 my-4 sm:mx-0 sm:text-left md:mx-0 md:text-center mx-auto text-center '>
                        <BsPhone size={50} className='text-[#ffd300] mb-4'/>
                        <p>08021235678</p>
                    </div>
                    <div className='mt-5 mb-4 items-center flex flex-col p-4 my-4 sm:mx-0 sm:text-center md:mx-0 md:text-center mx-auto text-center'>
                        <MdOutlineAlternateEmail size={50} className='text-[#ffd300] mb-4'/>
                        <p>info@africaplanfoundation.org</p>
                    </div>
                    <div className='mt-5 mb-4 items-center flex flex-col p-4 my-4 sm:mx-0 sm:text-center md:mx-0 md:text-center mx-auto text-center'>
                        <HiOutlineLocationMarker size={50} className='text-[#ffd300] mb-4' />
                        <p>Ekulu West Str, Enugu, Nigeria</p>
                    </div>
                </div>
           </div>
           <div className='my-4'>
                <p className='p-3 w-full mx-auto text-center'>{successMsg ? successMsg : errMsg}</p>
                <form onSubmit={handleSubmit} className='px-4'>
                    <div className='flex justify-between'>
                        <input className='p-3 mb-5 w-[49.5%] rounded-md text-black' type='text' placeholder='FullName' value={contact.name} onChange={updateContact} name='name' required/>
                        <input className='p-3 mb-5 w-[49.5%] rounded-md text-black' type='email' placeholder='johndoe@example.com' value={contact.email} onChange={updateContact} name='email' required/>
                    </div>
                    <textarea className='p-3 w-full rounded-md text-black' type='text' placeholder='Leave us a message'rows='3' cols='50' value={contact.message} onChange={updateContact} name='message' required />
                    <button className='bg-[#FFD300] text-white rounded-md font-medium w-full my-6 px-6 py-3'>Submit</button>
                </form>
           </div>
        </div> 
    </div>
  )
}
