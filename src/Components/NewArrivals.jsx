import React from 'react'
import ItemCard from './ItemCard'
// import 
// import { back2_svg, back_img, hand_img, hero1_img, hero2_img, star_img, support24_img } from '../Assets'

const NewArrivals = () => {
  return (
    <section className='px-[10rem]'>
        <div className='flex justify-between items-center py-6'>
          <span className='bricolage font-bold text-3xl'>New Arrivals</span>
          <a href='' className='underline'>See more</a>
        </div>
        <div className='grid grid-cols-4 gap-6'>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
      </section>
  )
}

export default NewArrivals