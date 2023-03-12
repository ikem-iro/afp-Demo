import React from 'react'

export default function Card(props) {
  return (
    <>
            <img className='mx-auto h-[220px]' src={props.imgUrl} alt="image from hackathonafrica" />
            <h3 className='text-2xl font-bold text-center py-8'>{props.name}</h3>
            <p className='mb-[3rem] text-center text-xl font-medium'>
                {props.info}
            </p>
    </>
  )
}
