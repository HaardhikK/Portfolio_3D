import React from 'react'
import { BrowserRouter } from "react-router-dom"

import { About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from "./components"

const App = () => {
  return (
    <BrowserRouter>
    {/* <div className="relative z-0 bg-[#EEE2DC]"> */}
    <div className="relative z-0 bg-gradient-to-b from-[#EEE2DC] to-[#222222]">
    <div className=' bg-cover bg-no-repeat bg-center'>
     <Navbar />
     <Hero />
    </div>

    <About />
    <Works />


    <div className='relative z-0 '>
    <Experience />
     <Contact />
     <StarsCanvas />
    </div>

    </div>
    </BrowserRouter>
  )
}

export default App
