import React from 'react'

const Testimonial = () => {
  return (
    <div className='flex flex-col w-[28rem] p-10 bg-white shadow-md'>
        <div className='mb-6'>
            <span className='pr-5'>Place</span>
            <span className=''>|</span>
            <span className='pl-2'>00:00pm</span>
        </div>
        <div className='leading-tight'>
        “Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users who want success.”
        </div>
        <div className='my-2'>
            <span className='bricolage text-label text-sm'>User Nae</span>
        </div>
    </div>
  )
}

export default Testimonial