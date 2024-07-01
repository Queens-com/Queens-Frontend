import React from 'react'
import { useState } from 'react'
import ItemCard from './ItemCard'
import WishlistCard from './WishlistCard'

const Wishlist = () => {
    const [empty, setEmpty] = useState(false)
    // for dev purposes
    setInterval(()=>{
        // setEmpty(!empty)
    }, 2000)
    return (
        <div className='flex flex-col'>
            <div className={`${!empty?'hidden':''} place-self-center text-center`}>
                <h2 className='bricolage text-3xl font-bold mt-4'>Your Wishlist is empty!</h2>
                <div className='roboto flex justify-center text-placeholder_text text-sm font-semibold mt-2 mb-20'>
                    Add your favourite items and share them.
                </div>
            </div>
            <div className={`${empty?'hidden':''} grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6`}>
                <WishlistCard />
                <WishlistCard />
                <WishlistCard />
                <WishlistCard />
                <WishlistCard />
                <WishlistCard />
                <WishlistCard />
                <WishlistCard />
            </div>
        </div>
    )
}

export default Wishlist