import React from 'react'

const Succes = () => {
  return (
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
  )
}

export default Succes