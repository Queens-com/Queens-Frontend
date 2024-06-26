import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Hero from '../Components/Hero'
import NewArrivals from '../Components/NewArrivals'
import CTA1 from '../Components/CTA1'
import FAQ from '../Components/FAQ'
import Testimonials from '../Components/Testimonials'
import FeatureCardSection from '../Components/FeatureCardSection'
import { handFW_img } from '../Assets'

const LandingPage = () => {
  return (
    <div className='Landing_Page w-[100vw] max-w-[1440px] text-active_text mx-auto'>
      <Navbar />
      <img src={handFW_img} className='z-[-1] absolute top-40 w-[80%] h-auto' 
       style={{
        aspectRatio: '1440 / 453',
      }}
      alt='hand-in-the-background'
      />
      <Hero />

      <FeatureCardSection />

      <NewArrivals />

      <CTA1 />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default LandingPage