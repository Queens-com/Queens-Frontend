import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { hero1_img, hero2_img } from '../Assets'

const Landing_Page = () => {
  return (
    <div className='Landing_Page'>
        <Navbar />
        {/* <div className='h-20'></div> */}
        <section className='flex p-20'>

          <div className='w-[40%] flex-grow py-20 px-10 leading-4'>
            <h1 className='bricolage font-bold text-6xl mb-3 leading p-0'>Elegance at it's peak</h1>
            <span className='leading-tight'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </span>
            <div>

            <button className='inter border border-black rounded-full p-4 mt-5 font-bold text-md'>SHOP NOW</button>
            </div>
          </div>
          
          <div className='w-[60%] h-[36rem] flex-grow break-al px-10'>
            <div className='relative flex w-[100%] h-[100%]'>
            <img src={hero1_img} className='absolute bottom-0 left-0 w-70 h-auto'></img>
            <img src={hero2_img} className='absolute top-0 right-0 w-70 h-auto'></img>
            </div>
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default Landing_Page