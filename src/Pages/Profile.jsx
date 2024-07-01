import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { profile_img, profile_banner_img } from "../Assets";
import Footer from '../Components/Footer';
import EditProfile from '../Components/EditProfile';
import Orders from '../Components/Orders';
import Wishlist from '../Components/Wishlist';
import Navbar from '../Components/Navbar';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'My Profile' },
        { id: 'orders', label: 'Orders' },
        { id: 'wishlist', label: 'Wishlist' }
    ];


    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();



    return (
        <section className="w-full">
            <Navbar />

            <div>
                <img src={profile_banner_img} alt="banner" className="object-cover w-full h-[33vh] md:h-[50vh]" />
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className='relative'>
                    <img src={profile_img} alt="Profile" className="w-40 h-40 rounded-full object-cover border-[10px] border-white -mt-20" />
                    <button className='absolute flex items-center justify-center bg-succes1 rounded-full aspect-square bottom-3 right-3 border-8'>
                    <i className="fas fa-camera"></i>
                    </button>
                </div>
                <div className="text-center m-4">
                    <h1 className="text-4xl font-bold">Toby MacQueen</h1>
                    <p className="text-gray-600 mt-1">
                        <i className="fas fa-map-marker-alt"></i> Lagos, Nigeria
                    </p>
                </div>
            </div>


            <div className="flex justify-center w-[80%] mx-auto mt-4 space-x-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`basis-1/3 md:basis-auto md:w-40 min-w-24 py-2 rounded-t-md transition-colors duration-300 ${activeTab === tab.id ? 'bg-black text-white' : 'bg-gray-200'
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="mt-8 w-[80%] mx-auto mb-20 md:mb-40 bo">
                <div className={`transition-opacity duration-300 ${activeTab === 'profile' ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    <EditProfile />
                </div>
                <div className={`transition-opacity duration-300 ${activeTab === 'orders' ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    <Orders />
                </div>
                <div className={`transition-opacity duration-300 ${activeTab === 'wishlist' ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    <Wishlist />
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Profile;