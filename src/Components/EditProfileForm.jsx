import React from 'react'
import { useState } from 'react'
import axios from '../axios'
import { useNavigate } from 'react-router-dom'
import '../Styles/globalStyles.css'

const EditProfileForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const data = {
            first_name: formData.get('firstName'),
            last_name: formData.get('lastName'),
            middle_name: formData.get('middleName'),
            email: formData.get('email'),
            country: formData.get('country'),
            country_code: formData.get('countryCode'),
            phone: formData.get('phoneNumber'),
            password: formData.get('password'),
            profile_photo: formData.get('profilePicture'),
        };

        try {
            const response = await axios.post('/', data);
            console.log(response.data);
            navigate('/');
        }
        catch (error) {
            console.error('There was an error signing up.', error.response || error);

            const errorMessage = error.response?.data?.detail || 'An error occurred during signup. Please try again.';
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

            <label htmlFor="firstName" className='flex gap-2 flex-col text-left'>
                First Name
                <input name='firstName' type="text" placeholder='e.g John' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe- text-base4' required />
            </label>

            <label htmlFor="lastName" className='flex gap-2 flex-col text-left'>
                Last Name
                <input name='lastName' type="text" placeholder='e.g Doe' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 text-base' required />
            </label>

            <label htmlFor="email" className='flex gap-2 flex-col text-left'>
                Email
                <input name='email' type="email" placeholder='yourname@email.com' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 text-base' required />
            </label>

            <label htmlFor="country" className='flex gap-2 flex-col text-left'>
                Country
                <input name='country' type='text' placeholder='Enter country' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 text-base' required />
            </label>

            <div className='flex gap-3 flex-col mt-4'>
                <button className='bg-white text-black hover:bg-black hover:text-white transition duration-300 pt-2 pb-2 ps-4 pe-4 rounded-full' type='submit'>Save Changes</button>
            </div>

        </form>
    )
}

export default EditProfileForm