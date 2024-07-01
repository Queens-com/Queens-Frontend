import React from 'react'
import { cart_svg, demoItem1 } from '../Assets'
import NewTag from './NewTag'

const WishlistCard = () => {
  const refID = "1234"
  return (
    <div className={`flex flex-col h-auto w-full overflow-hidden shadow-sm`}>
    {/* <NewTag /> */}
    <img src={demoItem1} alt="item" className='w-full h-[80%]'/>

    <div className='flex justify-between items-center mt-4 px-1 mb-1'>
    <div className='flex flex-col'>
      <span className="font-bold mb text-active_text leading-tight">Product name</span>
      <span className='text-sm text-placeholder_text leading-snug'>Ref ID: {refID}</span>
    </div>
      <img src={cart_svg} alt="cart" className='w-[22px] h-[20px]'/>
    </div>
  </div>
  )
}

export default WishlistCard