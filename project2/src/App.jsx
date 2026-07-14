import { useState } from 'react'

import './App.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Skill from './pages/Skill'
import Projects from './pages/Projects'
import Exp from './pages/Exp'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {
 

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skill />
    <Projects />
    <Exp />
    <Contact/>
    <Footer />
    
        </>
  )
}

export default App
