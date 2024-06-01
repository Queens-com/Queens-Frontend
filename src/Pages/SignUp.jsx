import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/globalStyles.css'

function SignUp() {
  return (
    <div className='SignUp'>
      <div className='flex items-center justify-center p-6'>
        <div className='text-black max-w-screen-sm m-auto text-center'>
          <img src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1717242411/vi2wz0daaykkw8nrnzdi.png" alt="logo" className='w-20 md:w-100 m-auto mb-8' />
          <div>
            <h1 className='bricolage font-bold text-xl md:text-3xl mb-3'>Let’s get you started!</h1>
            <div className='flex items-center justify-between gap-2 ms-4 me-4'>
              <img src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1717244265/cjkzrezs0kcdndeb6usv.png" alt="line-left" className='w-20' />
              <p className='font-semibold text-gray-600 text-sm md:text-md '>Sign up with</p>
              <img src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1717244265/u4ko1m6rk5ykixvjq2ym.png" alt="line-right" className='w-20' />
            </div>
          </div>

          <div className='flex gap-2 items-center justify-between mt-4'>
            <div className='flex gap-3 items-center ps-4 pe-4 pt-2 pb-2 border border-black rounded-full'>
              <img src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1717245187/pyvxzowophv1r6s5bqql.png" alt="google" />
              <h1 className='text-gray-700 text-xs md:text-base'>Google</h1>
            </div>
            <div className='flex gap-3 items-center ps-4 pe-4 pt-2 pb-2 border border-black rounded-full'>
              <img src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1717245186/mqj6g8jos5jrsbiirajj.png" alt="apple" />
              <h1 className='text-gray-700 text-xs md:text-base'>Apple</h1>
            </div>
            <div className='flex gap-3 items-center ps-4 pe-4 pt-2 pb-2 border border-black rounded-full'>
              <img src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1717245186/kaqqkjeppcug1iuqrd6b.png" alt="facebook" />
              <h1 className='text-gray-700 text-xs md:text-base'>Facebook</h1>
            </div>
          </div>

          <form className='flex flex-col gap-3 mt-4'>
            <label htmlFor="firstName" className='flex gap-2 flex-col text-left'>
            First Name
            <input type="text" placeholder='e.g John' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4' required />
            </label>

            <label htmlFor="lastName" className='flex gap-2 flex-col text-left'>
            Last Name
            <input type="text" placeholder='e.g Doe' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4' required />
            </label>

            <label htmlFor="email" className='flex gap-2 flex-col text-left'>
            Email
            <input type="email" placeholder='yourname@email.com' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4' required />
            </label>

            <label htmlFor="password" className='flex gap-2 flex-col text-left'>
            Password
            <input type="password" placeholder='Enter password' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4' />
            </label>

            <label htmlFor="password" className='flex gap-2 flex-col text-left'>
            Confirm Password
            <input type="password" placeholder='Re-enter password' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4' />
            </label>

          </form>

          <div className='flex items-center gap-3 mt-6 text-left text-sm'>
            <input type="checkbox" name="t&c" id="t&c" className='bg-black'/>
            <p>By clicking, you agree to Queen’s Privacy Policy and terms of service</p>
          </div>

          <div className='flex gap-3 flex-col mt-4'>
            <button className='bg-[#1E1E1E] text-white pt-2 pb-2 ps-4 pe-4 rounded-full'>Sign up</button>
            <Link to="/login" className='text-xs text-blue-500 underline'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp