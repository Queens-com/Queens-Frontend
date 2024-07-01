import React from 'react'
import { cart_svg, demoItem1 } from '../Assets'
import NewTag from './NewTag'

const Orders = () => {
  return (
    <div className='flex flex-col'>
        <div>
            <h2 className='bricolage text-3xl font-bold mb-4'>Current Orders</h2>
            <div className='roboto flex justify-center text-label text-xl my-10 mb-20'>
                No Current Orders Availible
            </div>
            <h2 className='bricolage text-3xl font-bold mb-4'>My Purchase History</h2>
            <div className='roboto flex justify-center text-label text-xl my-10'>
                No Current Orders Availible
            </div>
        </div>
    </div>
  )
}

export default Orders