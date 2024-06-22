import React from 'react'
import Testimonial from './Testimonial'

const Testimonials = () => {
  return (
    <section className='flex flex-col items-center mt-[10rem]'>
        <span className='block bricolage font-bold text-3xl mb-1'>
               Testimonials
            </span>
        <div className='flex overflow-clip'>
            <Testimonial />
            <Testimonial />
            <Testimonial />
        </div>
    </section>
  )
}

export default Testimonials