import React from 'react'
import EditLoginInformation from './EditLoginInformation'
import EditProfileForm from './EditProfileForm'

const EditProfile = () => {
    return (
        <div className='flex flex-col md:flex-row gap-16 md:gap-10'>
            <div className='md:basis-1/2'>
                <h2 className="bricolage text-3xl font-semibold mb-4">My Profile</h2>
                <EditProfileForm />
            </div>
            <div className='md:basis-1/2'>
                <h2 className="bricolage text-3xl font-semibold mb-4">Login Information</h2>
                <EditLoginInformation />
            </div>
        </div>
    )
}

export default EditProfile