import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { profile_img, profile_banner_img } from "../Assets";
import EditProfileForm from '../Components/EditProfileForm';

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

            <div>
                <img src={profile_banner_img} alt="banner" className="w-full h-auto" />
            </div>

            <div className="flex flex-col items-center justify-center">
                <div>
                    <img src={profile_img} alt="Profile" className="w-40 h-40 rounded-full object-cover border-[10px] border-white -mt-20" />
                </div>
                <div className="text-center m-4">
                    <h1 className="text-4xl font-bold">Toby MacQueen</h1>
                    <p className="text-gray-600">
                        <i className="fas fa-map-marker-alt"></i> Lagos, Nigeria
                    </p>
                </div>
            </div>


            <div className="flex justify-center mt-4 space-x-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`w-40 py-2 rounded-t-md transition-colors duration-300 ${activeTab === tab.id ? 'bg-black text-white' : 'bg-gray-200'
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="mt-8 px-40 ">
                <div className={`transition-opacity duration-300 ${activeTab === 'profile' ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    <div className='flex flex-col md:flex-row space-x-10'>
                        <div className='md:basis-1/2'>
                            <h2 className="bricolage text-3xl font-semibold mb-4">My Profile</h2>
                            <EditProfileForm />
                        </div>
                        <div className='md:basis-1/2'>
                            <h2 className="bricolage text-3xl font-semibold mb-4">Login Information</h2>

                        </div>
                    </div>
                </div>
                <div className={`transition-opacity duration-300 ${activeTab === 'orders' ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    <h2 className="text-xl font-semibold mb-4">Orders Content</h2>
                </div>
                <div className={`transition-opacity duration-300 ${activeTab === 'wishlist' ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    <h2 className="text-xl font-semibold mb-4">Wishlist Content</h2>
                </div>
            </div>
        </section>
    );
};

export default Profile;