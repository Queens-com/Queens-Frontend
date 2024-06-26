import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import StoreButton from '../Components/StoreButton';
import { dior_img, gucci_img, louis_img, versace_img, cartier_img, hermes_img } from '../Assets'

const stores = [
    { logo: dior_img, altText: 'Dior', url: '' },
    { logo: gucci_img, altText: 'Gucci', url: '' },
    { logo: louis_img, altText: 'Louis Vuitton', url: '' },
    { logo: versace_img, altText: 'Versace', url: '' },
    { logo: cartier_img, altText: 'Cartier', url: '' },
    { logo: hermes_img, altText: 'Hermès', url: '' },
];


const Stores = () => {
    return (
        <div>
            <Navbar />
            <section className='px-6 py-6 max-w-[1280px] mx-auto mt-10'>
                <div className='md:px-20'>
                    <h1 className='bricolage font-semibold text-3xl'>Choose a store</h1>
                    <p className='text-placeholder_text leading-tight mt-1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                </div>

                <div className="md:px-20 lg:my-10 mt-6 flex flex-wrap justify-center gap-y-6">
                    {stores.map((store, index) => (
                        <StoreButton key={index} logo={store.logo} altText={store.altText} url={store.url} />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Stores