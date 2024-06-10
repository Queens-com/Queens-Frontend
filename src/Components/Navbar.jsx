import React from 'react'
import { Q_svg, back_svg, shop_svg, search_svg, profile_svg, heart_svg, cart_svg } from '../Assets'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='flex flex-col h-16 w-100 items-center justify-center pt-1'>
                <div style={{ width: "80%", height: "70%" }} className='ml-10 flex flex-row justify-between'>
                    <div className=' h-100 aspect-square pt-0 pr-1 pl-1 pb-0 mr-20'>
                        <img src={Q_svg}></img>
                    </div>

                    <div className='flex flex-row gap-2 items-center'>

                        <button className='flex gap-2 items-center justify-center'>
                        <img src={shop_svg} alt='shop' className=' w-6 h-6' />
                        Stores
                            <img src={back_svg} alt="dropdown" className='mt-1 ml-3 w-3 h-6' style={{ rotate: "270deg" }} />
                        </button>
                    </div>

                    <div className='flex h-100] items-center justify-center ml-20 p'>
                        <form className=''>
                            <label htmlFor="text" className='flex gap-2 font-medium flex-row roboto text-left'>
                                Search
                                <input type="text"  className='rounded-full w-[10vw]' />
                            </label>
                        </form>
                        {/* <form className='flex flex-row gap-2 justify-center items-center'>
                            <input type=''>

                            </input>
                            <img src={search_svg} alt="Search" />
                        </form> */}
                    </div>

                    <div className='flex gap-3'>

                    <div className=' flex flex-x-0 gap-4 itmes-center '>
                            <button className='mr-6'>
                            <img src={search_svg} alt="Search" width={25} height="25px" />
                            </button>
                        <button>
                            <img src={profile_svg} alt="Profile" width={25} height={25}/>
                        </button>
                        <button>
                            <img src={heart_svg} alt="Favoirites" width={25} height={25}/>
                        </button>
                        <button>
                            <img src={cart_svg} alt="Cart" width={25} height={25}/>
                        </button>
                    </div>

                    <div className='w-50 flex item-center gap 6'>
                        <button className="bg-black text-white rounded-full border-black m-1 px-4">
                            Sign up
                        </button>
                        <button className="bg-white text-black rounded-full border border-black m-1 px-4">
                            Login
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar