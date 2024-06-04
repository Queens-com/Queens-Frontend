import React from 'react'
import {Q_svg, back_svg, } from "../Assets"

const Reset_Password = () => {
  return (
    <div className='Reset_Password'>
    <div className='flex items-center bg-white-500 justify-center'  style={{height:"100vh", width:"100vw"}}>
        <div className=''>
        <div className='justify-center flex items-center mb-20'>
        <img src={Q_svg} alt="Q" />
        </div>
        <div className='mb-5'>
            <button className='p-2'>
            <img src={back_svg}></img>
            </button>
        </div>
        <div >
            <h1 className='bricolage font-bold text-3xl mb-1 text-active_text'>Reset Pasword</h1>
            <p className='text-label font-medium'>Insert your registered email or phone number</p>
        </div>
        
        <form className='flex flex-col gap-3 mt-4'>
            <label htmlFor="firstName" className='flex gap-2 flex-col text-left text-label'>
            Email
            <input type="text" placeholder='enter your email' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe- text-base4' required />
            </label>
        </form>

        <div className='flex gap-3 flex-col mt-10'>
            <button className='bg-[#1E1E1E] text-white pt-2 pb-2 ps-4 pe-4 rounded-full'>Confirm</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Reset_Password

{
    <div className='SignUp'>
    <div className='flex items-center justify-center p-6' style={{height:"100vh"}}>
      
      <div className='text-black max-w-screen-sm m-auto text-center'>
        <img src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1717242411/vi2wz0daaykkw8nrnzdi.png" alt="logo" className='w-100 m-auto mb-8' />
        <div>
          <h1 className='bricolage font-bold text-2xl mb-3'>Congrats, your account is set</h1>
          <div className='flex items-center justify-center gap-2 ms-8 me-8'>
            <p className='font-semibold text-gray-600 text-md text-center '>You will be redirected shortly</p>
          </div>
        </div>
      </div>

    </div>
  </div>
}