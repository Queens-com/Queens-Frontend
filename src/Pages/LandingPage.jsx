import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Hero from '../Components/Hero'
import NewArrivals from '../Components/NewArrivals'
import CTA1 from '../Components/CTA1'
import FAQ from '../Components/FAQ'
import { back_img, star_img, support24_img } from '../Assets'
import Testimonials from '../Components/Testimonials'

const LandingPage = () => {
  return (
    <div className='Landing_Page w-[100vw] max-w-[1440px] text-active_text mx-auto'>
      <Navbar />
      <Hero />

      <section className='flex h-auto px-[12rem] py-10'>
        <div className='flex flex-col items-center basis-1/3'>
          <img src={star_img} className="w-[24px] h-[24px] mb-8" alt="star"/>
          <p className='font-bold text-lg bricolage mb-1'>High Quality</p>
          <span className='leading-tight text-center roboto'>All of our products go through very strict inspection before we dispatch them</span>
        </div>
        <div className='flex flex-col items-center basis-1/3'>
          <img src={back_img} className="w-[24px] h-[24px] mb-8" alt="back"/>
          <p className='font-bold text-lg bricolage mb-1'>Easy Returns</p>
          <span className='leading-tight text-center roboto'>Our return policy is simple and that is why customers love our shop</span>
        </div>
        <div className='flex flex-col items-center basis-1/3'>
          <img src={support24_img} className="w-[24px] h-[24px] mb-8" alt="support"/>
          <p className='font-bold text-lg bricolage mb-1'>Customer Service</p>
          <span className='leading-tight text-center roboto'>We offer amazing customer service no matter what happens</span>
        </div>
      </section>

      <NewArrivals />

      <CTA1 />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default LandingPage