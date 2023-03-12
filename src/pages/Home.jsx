import React from 'react'
import Aboutus from '../components/Aboutus'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Ourprojects from '../components/Ourprojects'
import Whatwedo from '../components/Whatwedo'


export default function Home() {
  return (
    <>
        <Hero />
        <Aboutus />
        <Whatwedo />
        <Ourprojects />
        <Contact />
    </>
  )
}
