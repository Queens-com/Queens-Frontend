import React from 'react'
import { cart_svg, demoItem1 } from '../Assets'
import NewTag from './NewTag'

const ItemCard = () => {
  return (
    <div className={`relative h-auto w-full rounded-md overflow-hidden shadow-md`}>
      <NewTag />
      <img src={demoItem1} alt="item" className='w-full h-38'/>
      <div className='flex justify-between items-center mt-5 mx-1'>
      <div className='flex flex-col'>
        <span className="font-bold">Product Name</span>
        <span>$1000</span>
      </div>
        <img src={cart_svg} alt="cart" className='w-[22px] h-[20px]'/>
      </div>
    </div>
  )
}

export default ItemCard