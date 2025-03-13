import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './components/Footer'

const App = () => {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App