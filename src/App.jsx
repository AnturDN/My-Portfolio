import React from 'react'

import Background from './Components/Background'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Slider from './Components/Slider'
import Projects from './Components/Projects'
import Footer from './Components/Footer'


const App = () => {
  return (

    <Background>

          
      <Navbar/>
    
        <div className='pt-10'>
          <Home/>
          <About/>
          <Slider/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
          

        

    </Background>

      
      

    
  )
}

export default App