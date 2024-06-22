import React from 'react'
// import { Link } from 'react-router-dom'
import { back_svg, back2_svg } from '../Assets'
const userEmail = "tobymacqueen@gmail.com";

const OTP = () => {
    const otpInput = `bg-gray-100 border-label border rounded-lg h-14 w-16 rounded-10 text-2xl text-center leading-tight flex items-center justify-center maxLength-1`
  return (
    <div className='ResetPassword'>
    <div className='flex items-center bg-white-500 justify-center'  style={{height:"100vh", width:"100vw"}}>
        <div className=''>
        <div className='mb-3'>
            <button className='p-1'>
            <img src={back_svg} alt='backimg'></img>
            </button>
        </div>
        <div >
            <h1 className='bricolage font-extrabold text-xl mb-1 text-active_text'>Verify email</h1>
            <p className='text-label text-xs font-medium'>Enter the OTP sent to {userEmail}</p>
        </div>
        
        <form className='mt-4 mb-6'>
            <label htmlFor="OTP" className='flex gap-3 flex-col text-xl text-center roboto font-bold text-active_text'>
            <div className='relative flex flex-row gap-6 justify-center items-center mb-4' style={{
                overflow:"hidden"
            }}>
            <input type="numeric" className={otpInput} required />
            <input type="numeric" className={otpInput} required />
            <input type="numeric" className={otpInput} required />
            <input type="numeric" className={otpInput} required />
            </div>
            <button className='text-xs underline font-normal '>Request a new code</button>
            </label>
        </form>

        <div className='flex gap-3 flex-col mt-10'>
            <button className='bg-active_text text-white pt-2 pb-2 ps-4 pe-4 rounded-full flex flex-row justify-center items-center'>
                Proceed
                <div className='ml-2 justify-center items-center'>
                 <img className='scale-x-[-1] w-h h-3' src={back2_svg} alt="dropdown"></img>
                </div>
            </button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default OTP