import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

import Blog from './pages/Blog'
import Hackathonafrica from './pages/Hackathonafrica'
import Foundernote from './pages/Foundernote'



export default function App () {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/hackathonafrica' element={<Hackathonafrica />} />
        <Route path='/blog' element={<Blog />}/>
        <Route path='/foundersnote' element={<Foundernote />}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  )
}
