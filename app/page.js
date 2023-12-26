"use client"
// import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import Flexbox from '@/components/Flexbox'
import Bottom from '@/components/Bottom'
import Faq from '@/components/Faq'
import Newsletter from '@/components/Newsletter'
import About from '@/components/About'
import Footer from '@/components/Footer'
import React, { useRef } from 'react';

const page = () => {
  const newsletterRef = useRef();
  return (
    <div className='bg-color scroll-smooth'>
      <div className="grad">
        <div className="animation-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          {/* <div class="particle particle-3"></div> */}
          {/* <div class="particle particle-4"></div> */}
          {/* <div className="backgroundContainer"> */}
          <Navbar />
          <Hero />
          <Grid />
          <Flexbox />
          {/* <Bottom /> */}
          <Faq />
          <div ref={newsletterRef}>
            <Newsletter />
          </div>
          <About />
          <Footer />
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default page

