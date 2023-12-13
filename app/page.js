import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import Flexbox from '@/components/Flexbox'
import Bottom from '@/components/Bottom'
import Faq from '@/components/Faq'
import Newsletter from '@/components/Newsletter'
import About from '@/components/About'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='bg-color'>
      <div className="grad">
        <div className="backgroundContainer">
           <Navbar />
          <Hero />
          <Grid />
          <Flexbox /> 
          {/* <Bottom /> */}
          <Faq />
          <Newsletter />
          <About />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default page

