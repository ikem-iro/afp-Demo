import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import notes from '../../Data/note.json'

export default function Founderbody() {
  return (
    <div className='w-full bg-gray-200 py-20 px-5'>
         <div className='max-w-[1536px] mx-auto'>
                <p className='text-center sm:text-left sm:mb-8 font-medium mb-5 text-xl'>{notes.intro}</p>
                <br />
                <p className='text-left sm:text-left sm:mb-8 font-medium text-xl'>{notes.problemheader}</p>
                <p className='text-left sm:text-left sm:mb-8 font-medium mb-5 text-xl'>{notes.problembody}</p>
                <br />
                <p className='text-left sm:text-left sm:mb-8 font-medium text-xl'>{notes.solutionintro}</p>
                <ol className='pl-5 text-left sm:text-left sm:mb-8 font-medium mb-5 text-xl' style={{listStyle : 'type=1'}}>
                    <li>{notes.solutionlist1}</li>
                    <li>{notes.solutionlist2}</li>
                    <li>{notes.solutionlist3}</li>
                </ol>
                <br />
                <p className='text-left sm:text-left sm:mb-8 font-medium mb-5 text-xl'>{notes.conclusionstart}</p>
                <p className='text-left sm:text-left sm:mb-8 font-medium mb-5 text-xl'>{notes.conclusionend}</p>
                <br />
                <p className='text-left sm:text-left sm:mb-8 font-medium mb-5 text-xl'><em>{notes.signoffname}</em></p>
                <p className='text-left sm:text-left sm:mb-8 font-medium mb-5 text-xl'><em>{notes.signoffsceond}</em></p>
                <div style={{textDecoration : 'underline'}} className='text-left sm:text-left sm:mb-8 text-gray-400 mb-5 text-xl'>
                  <Link smooth to='/hackathonafrica#ourfounder'>
                    Back to Hackathon Africa
                  </Link>
                </div>
         </div>
    </div>
  )
}
