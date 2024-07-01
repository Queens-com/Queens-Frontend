import React from 'react'
import { useState } from 'react'
import axios from '../axios'
// import { useNavigate } from 'react-router-dom'
import '../Styles/globalStyles.css'
import Modal from './Modal'
import { warning_svg } from '../Assets'

const EditLoginInformation = () => {
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const data = {
            first_name: formData.get('firstName'),
            last_name: formData.get('lastName'),
            email: formData.get('email'),
            country: formData.get('country'),
        };

        try {
            const response = await axios.post('/', data);
            console.log(response.data);
        }
        catch (error) {
            console.error('There was an error editing user lgin credentials.', error.response || error);

            const errorMessage = error.response?.data?.detail || 'An error occurred during editing your login credentials. Please try again.';
            setErrorMessage(errorMessage);
            setShowModal(true);

            setTimeout(() => {
                setShowModal(false);
                setErrorMessage('');
            }, 5000);
        }
    };
    return (
        <form className='flex flex-col gap-3 mt-4' onSubmit={handleSubmit}>
            <label htmlFor="email" className='flex gap-2 flex-col text-left'>
                Email
                <input name='email' type="email" placeholder='yourname@email.com' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 text-base' required />
            </label>

            <label htmlFor="lastName" className='flex gap-2 flex-col text-left'>
                Password
                <div className='flex gap-3 flex-col mt'>
                    <button className='bg-white text-black hover:bg-black hover:text-white border border-black transition duration-300 pt-2 pb-2 ps-4 pe-4 rounded-full' type='submit'>Change Password</button>
                    <button onClick={() => setShowModal(true)} className='bg-white text-error1 hover:bg-error1 hover:text-white border border-error1 transition duration-300 pt-2 pb-2 ps-4 pe-4 rounded-full' type='submit'>Delete Account</button>
                </div>
            </label>

            <Modal open={showModal} onClose={() => setShowModal(false)}>
                <div className='flex flex-col gap-4 text-lg py-6 px-2 md:px-8 w-full'>
                    {/* <img src={warning_svg} className='w-20 h-auto aspect-square self-center' /> */}
                    <p className='self-center text-center text-error1 font-bold text-2xl'>Delete Account?</p>
                    <p className='text-label font-bold text'>You are about to delete your accout</p>
                    <p classame="text-placeholder_text p-10">You will on longer be able to log into Queens with this account</p>
                    <p classame="text-placeholder_text">This action <span className='text-error1 font-semibold'>cannot be undone.</span> Are you sure you want to continue?</p>
                    <div className='flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 mt-4'>
                        <button onClick={() => { }} className='roboto w-full sm:basis-1/2 px-2 py-2 min-w-[120px] bg-error1 rounded-full text-gray-100'>Delete</button>
                        <button onClick={() => {setShowModal(false)}} className='roboto w-full sm:basis-1/2 px-2 py-2 min-w-[120px] bg-wbite font-semibold border border-1 border-black rounded-full text-black'>Cancel</button>
                    </div>
                </div>
            </Modal>
        </form>
    )
}

export default EditLoginInformation