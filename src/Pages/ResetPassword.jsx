import React from 'react'
import {Q_svg, back_svg, eye_svg, eyeCl_svg} from "../Assets"

const ResetPassword = () => {
  let showpassword = false;

  return (
    <div className='ResetPassword'>
    <div className='flex items-center bg-white-500 justify-center'  style={{height:"100vh", width:"100vw"}}>
        <div className=''>
        <div className='justify-center flex items-center mb-16'>
        <img src={Q_svg} alt="Q" />
        </div>
        <div className='mb-5'>
            <button className='p-1'>
            <img src={back_svg} alt='backimg'></img>
            </button>
        </div>
        <div >
            <h1 className='bricolage font-bold text-4xl mb-1 text-active_text'>Reset Pasword</h1>
            <p className='text-label font-medium'>Insert your registered email or phone number</p>
        </div>
        
        <form className='flex flex-col gap-3 mt-4'>
            <label htmlFor="firstName" className='flex gap-2 flex-col text-left text-label'>
            Email
            <div className='flex flex-row justify-between'>

            <input type="text" placeholder='enter your email' className='bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-0 text-base4' required />
            <button className='h-100 aspect-square' >
            <img src={showpassword?eye_svg:eyeCl_svg} alt="show-password" className='h-100 aspect-square' />
            </button>
            </div>
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

export default ResetPassword