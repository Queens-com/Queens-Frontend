import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../Styles/style';
import { Q_svg, back_svg, shop_svg, search_svg, profile_svg, heart_svg, cart_svg, menu_img, closeX_img } from '../Assets';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <nav className='w-full bg-white px-2 md:px-20 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo */}
                    <div className='flex-shrink-0 cursor-pointer' onClick={() => handleNavigate('/')}>
                        <img src={Q_svg} alt="logo" className='h-10 w-auto' />
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden lg:flex items-center justify-between flex-grow ml-10'>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='flex items-center text-gray-700 hover:text-gray-900'>
                            <img src={shop_svg} alt='shop' className='w-5 h-5 mr-1' />
                            <span className='mr-4'>Stores</span>
                            <img src={back_svg} alt="dropdown" className={`w-3 h-3 ml-1 ${isMenuOpen?'transform rotate-[90deg]':'transform rotate-[-90deg]'}`} />
                        </button>
                        <div className='flex-grow max-w-xl mx-4'>
                            <form className='relative' onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Search" className='w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200' />
                                <button type="submit" className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                                    <img src={search_svg} alt="Search" className='w-5 h-5' />
                                </button>
                            </form>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <button><img src={profile_svg} alt="Profile" className="w-6 h-6" /></button>
                            <button><img src={heart_svg} alt="Favorites" className="w-6 h-6" /></button>
                            <button><img src={cart_svg} alt="Cart" className="w-6 h-6" /></button>
                            <button className='flex-shrink-0 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300' onClick={() => handleNavigate('/signup')}>Sign up</button>
                            <button className='text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300' onClick={() => handleNavigate('/login')}>Login</button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className='flex items-center lg:hidden'>
                        <button><img src={search_svg} alt="Search" className="w-6 h-6 mr-4" /></button>
                        <button><img src={profile_svg} alt="Profile" className="w-6 h-6 mr-4" /></button>
                        <button><img src={heart_svg} alt="Favorites" className="w-6 h-6 mr-4" /></button>
                        <button><img src={cart_svg} alt="Cart" className="w-6 h-6 mr-4" /></button>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-gray-700 hover:text-gray-900'>
                            <img src={isMenuOpen ? closeX_img : menu_img} alt="menu-toggle" className="w-7 h-7" />
                            {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg> */}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='lg:hidden absolute left-0 top-0 z-[2] flex flex-col pt-2 px-5 bg-white w-[100vw] h-[100vh]'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <div className='flex justify-between mb-6 items-center'>
                            <p className='bricolage font-bold text-black text-4xl'>Menu</p>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-gray-700 hover:text-gray-900'>
                                <img src={isMenuOpen ? closeX_img : menu_img} alt="menu-toggle" className="w-full h-full" />
                                {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg> */}
                            </button>
                        </div>

                        <button onClick={() => handleNavigate('')} className={style.mobile_menu_item}>DIOR</button>
                        <button onClick={() => handleNavigate('')} className={style.mobile_menu_item}>GUCCI</button>
                        <button onClick={() => handleNavigate('')} className={style.mobile_menu_item}>LOUIS VUTTON</button>
                        <button onClick={() => handleNavigate('')} className={style.mobile_menu_item}>VERSACE</button>
                        <button onClick={() => handleNavigate('')} className={style.mobile_menu_item}>CARTIER</button>
                        <button onClick={() => handleNavigate('')} className={style.mobile_menu_item}>HERMES</button>

                    </div>
                    <div className='absolute bottom-5 flex w-[90vw] space-x-2 px-2'>
                        <button className='basis-1/2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300' onClick={() => handleNavigate('/signup')}>Sign up</button>
                        <button className='basis-1/2 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300' onClick={() => handleNavigate('/login')}>Login</button>
                    </div>
                </div>
            )}

             {/* Dexktop Dropdown */}
             {isMenuOpen && (
                <div className='hidden lg:absolute lg:flex flex-col left-40 top-14 z-[2] pt-2 px-5 bg-transparent w-auto h-auto'>
                    <div className='flex flex-col px-2 pt-2 pb-3 space-y-1 md:space-y-0 sm:px-3'>
                
                        <button onClick={() => handleNavigate('')} className={style.mobile_menu_item}>DIOR</button>
                        <button onClick={() => handleNavigate('')} className={style.mobile_menu_item}>GUCCI</button>
                        <button onClick={() => handleNavigate('')} className={style.mobile_menu_item}>LOUIS VUTTON</button>
                        <button onClick={() => handleNavigate('')} className={style.mobile_menu_item}>VERSACE</button>
                        <button onClick={() => handleNavigate('')} className={style.mobile_menu_item}>CARTIER</button>
                        <button onClick={() => handleNavigate('')} className={style.mobile_menu_item}>HERMES</button>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;