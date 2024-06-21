import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from '../axios'
import { useNavigate } from 'react-router-dom'
import '../Styles/globalStyles.css'


function SignUp() {

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
      const response = await axios.post('/account/signup', data);
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
    <div className='SignUp'>
      <div className='flex items-center justify-center p-6' style={{height:"100vh"}}>
        <div className='text-black max-w-screen-sm m-auto text-center'>
          <img src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1717242411/vi2wz0daaykkw8nrnzdi.png" alt="logo" className='w-100 m-auto mb-8' />
          <div>
            <h1 className='bricolage font-bold text-3xl mb-3'>Let’s get you started!</h1>
            <div className='flex items-center justify-between gap-2 ms-8 me-8'>
              <img src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1717244265/cjkzrezs0kcdndeb6usv.png" alt="line-left" className='w-20' />
              <p className='font-semibold text-gray-600 text-md '>Sign up with</p>
              <img src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1717244265/u4ko1m6rk5ykixvjq2ym.png" alt="line-right" className='w-20' />
            </div>
          </div>

          <div className='flex gap-2 items-center justify-between mt-4'>
            <div className='flex gap-3 items-center ps-4 pe-4 pt-2 pb-2 border border-black rounded-full'>
              <img src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1717245187/pyvxzowophv1r6s5bqql.png" alt="google" />
              <h1 className='text-gray-700 text-base'>Google</h1>
            </div>
            <div className='flex gap-3 items-center ps-4 pe-4 pt-2 pb-2 border border-black rounded-full'>
              <img src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1717245186/mqj6g8jos5jrsbiirajj.png" alt="apple" />
              <h1 className='text-gray-700 text-base'>Apple</h1>
            </div>
            <div className='flex gap-3 items-center ps-4 pe-4 pt-2 pb-2 border border-black rounded-full'>
              <img src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1717245186/kaqqkjeppcug1iuqrd6b.png" alt="facebook" />
              <h1 className='text-gray-700 text-base'>Facebook</h1>
            </div>
          </div>

          {showModal && (

          <div>
            <div className='flex items-center gap-3 p-3 bg-red-100 mt-4 rounded'>
              <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
              <p className='text-xs'>{errorMessage}</p>
            </div>
          </div>
          )}

          <form className='flex flex-col gap-3 mt-4' onSubmit={handleSubmit}>
            <label htmlFor="firstName" className='flex gap-2 flex-col text-left'>
            First Name
            <input name='firstName' type="text" placeholder='e.g John' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe- text-base4' required />
            </label>

            <label htmlFor="lastName" className='flex gap-2 flex-col text-left'>
            Last Name
            <input name='lastName' type="text" placeholder='e.g Doe' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 text-base' required />
            </label>

            <label htmlFor="middleName" className='flex gap-2 flex-col text-left'>
            Middle Name
            <input name='middleName' type="text" placeholder='e.g Rick' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 text-base' required />
            </label>

            <label htmlFor="email" className='flex gap-2 flex-col text-left'>
            Email
            <input name='email' type="email" placeholder='yourname@email.com' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 text-base' required />
            </label>

            <label htmlFor="country" className='flex gap-2 flex-col text-left'>
            Country
            <input name='country' type='text' placeholder='Enter country' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 text-base' required />
            </label>

            <label htmlFor="countryCode" className='flex gap-2 flex-col text-left'>
            Country Code
            <input name='countryCode' type='text' placeholder='Enter country code' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 text-base' required />
            </label>

            <label htmlFor="phoneNumber" className='flex gap-2 flex-col text-left'>
            Phone
            <input name='phoneNumber' type='number' placeholder='Enter phone number' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 text-base' required />
            </label>

            <label htmlFor="profilePicture" className='flex gap-2 flex-col text-left'>
            Profile Picture
            <input name='profilePicture' type='text' placeholder='Select profile picture' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 text-base' required />
            </label>

            <label htmlFor="password" className='flex gap-2 flex-col text-left'>
            Password
            <input name='password' type="password" placeholder='Enter password' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 text-base' />
            </label>

            <label htmlFor="confirmPassword" className='flex gap-2 flex-col text-left'>
            Confirm Password
            <input name='confirmPassoword' type="password" placeholder='Re-enter password' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 text-base' />
            </label>


            <div className='flex items-center gap-3 mt-6 text-left text-sm'>
            <input type="checkbox" name="t&c" id="t&c" className='bg-black'/>
            <p>By clicking, you agree to Queen’s Privacy Policy and terms of service</p>
          </div>

          <div className='flex gap-3 flex-col mt-4'>
            <button className='bg-[#1E1E1E] text-white pt-2 pb-2 ps-4 pe-4 rounded-full' type='submit'>Sign up</button>
            <Link to="/login" className='text-xs text-blue-500 underline'>Login</Link>
          </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default SignUp