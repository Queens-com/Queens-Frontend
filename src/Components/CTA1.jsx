import React from 'react'
import { hand_img } from '../Assets'


const CTA1 = () => {
  return (
    <section className='my-20'>
    {/* <img src={hand_img} className='absolute top-0 left-0 w-full h-full' /> */}
    <div className='relative w-full h-auto bg-cover bg-center bg-[#00000088] text-white'
      style={{
        backgroundImage: `url(${hand_img})`,
        paddingBottom: '31.46%', // Aspect ratio of 453/1440
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
       <div className="absolute inset-0 bg-black opacity-50"></div>
       <div className="absolute inset-0 flex items-center justify-center ">
        <div className='flex flex-col items-center justify-center mt-6'>
        <span className='bricolage text-6xl font-semibold mb-3 leading-none'>Luxury in your hands</span>
        <span className='roboto max-w-[40rem] px-6 text-center leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</span>
        <button className='inter border border-white rounded-full w-[130px] py-3 mt-5 font-semibold text-[18px] leading-none'>SHOP NOW</button>
        </div>
       </div>
    </div>
  </section>
  )
}

export default CTA1