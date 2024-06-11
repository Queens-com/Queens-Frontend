import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { back2_svg, back_img, hand_img, hero1_img, hero2_img, star_img, support24_img } from '../Assets'

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
        <section className='flex h-auto px-[12rem] py-10'>
          <div className='flex flex-col items-center basis-1/3'>
            <img src={star_img} className="w-[24px] h-[24px] mb-8" />
            <p className='font-bold text-lg bricolage mb-1'>High Quality</p>
            <span className='leading-tight text-center roboto'>All of our products go through very strict inspection before we dispatch them</span>
          </div>
          <div className='flex flex-col items-center basis-1/3'>
            <img src={back_img} className="w-[24px] h-[24px] mb-8" />
            <p className='font-bold text-lg bricolage mb-1'>Easy Returns</p>
            <span className='leading-tight text-center roboto'>Our return policy is simple and that is why customers love our shop</span>
          </div>
          <div className='flex flex-col items-center basis-1/3'>
            <img src={support24_img} className="w-[24px] h-[24px] mb-8" />
            <p className='font-bold text-lg bricolage mb-1'>Customer Service</p>
            <span className='leading-tight text-center roboto'>We offer amazing customer service no matter what happens</span>
          </div>
        </section>

        <section>
          <div className='flex justify-between items-center px-[10rem] py-6'>
            <span className='bricolage font-bold text-3xl'>New Arrivals</span>
            <a href='' className='underline'>See more</a>
          </div>
          <div className='grid place-content-center'>
            will fill in late
          </div>
        </section>

        <section>
          <img src={hand_img} className='w-[100vw] h-auto' />
          <div className='w-[100vw] h-auto bg-[#00000088]' >
kdfja
          </div>
          <div className='w-[100vw] h-auto bg-[#00000088] bg-[url(${})] ' >
kdfja
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default Landing_Page