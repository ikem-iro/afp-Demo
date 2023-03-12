import React from 'react'
import Gallery from '../components/hackathonafrica/Gallery'
import Hero from '../components/hackathonafrica/Hero'
import Ourfounder from '../components/hackathonafrica/Ourfounder'
import Participants from '../components/hackathonafrica/Participants'
import WeTeach from '../components/hackathonafrica/WeTeach'

export default function Hackathonafrica() {
  return (
    <div>
        <Hero />
        <Ourfounder />
        <Participants />
        <WeTeach />
        <Gallery />
    </div>
  )
}
