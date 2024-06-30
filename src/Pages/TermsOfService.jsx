import React from 'react'
import { useNavigate } from 'react-router'
import { Q_svg, back_svg } from '../Assets'

const TermsOfService = () => {
    let numspan = "roboto font-bold text-active_text mb-3 text-md text-link"
    numspan+=" hidden"
    const text = "roboto leading-tight text-md mb-6 text-label inline-block"

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <section>
            <div className='flex flex-col items-center mt-1 md:mt-20 md:mb-5'>
                <div className='hidden md:block'>
                    <img src={Q_svg} alt="Q logo" className='w-20 h-20'></img>
                </div>
            <div className='relative flex items-center justify-center w-full h-14 px-1 mb-2 mt-2 '>
                <button onClick={() => handleNavigate('')} className='absolute left-3 flex md:hidden items-center text-gray-700 hover:text-gray-900'>
                    <img src={back_svg} alt="dropdown" className={`w-8 h-5 ml-1 transform rotate-[0deg]`} />
                </button>
                <h1 className='bricolage flex-grow text-center font-bold text-2xl md:text-4xl'>Terms of Service</h1>
            </div>
            </div>

            <div className='px-5 md:max-w-[80%] mx-auto'>
                <span className={text}>
                <span className={numspan}>15.1 </span>   
                Your privacy is important to us. To better protect your privacy, we are providing this notice explaining our policy with regards to the information you share with us. This privacy policy relates to the information we collect, online from Application, received through the email, by fax or telephone, or in person or in any other way and retain and use for the purpose of providing you services. If you do not agree to the terms in this Policy, we kindly ask you not to use these portals and/or sign the contract document.
                </span>
                <span className={text}>
                <span className={numspan}>15.2 </span>   
                In order to use the services of this Application, You are required to register yourself by verifying the authorised device. This Privacy Policy applies to your information that we collect and receive on and through Doctor 24×7; it does not apply to practices of businesses that we do not own or control or people we do not employ.
                </span>
                <span className={text}>
                <span className={numspan}>15.3 </span>   
                Your privacy is important to us. To better protect your privacy, we are providing this notice explaining our policy with regards to the information you share with us. This privacy policy relates to the information we collect, online from Application, received through the email, by fax or telephone, or in person or in any other way and retain and use for the purpose of providing you services. If you do not agree to the terms in this Policy, we kindly ask you not to use these portals and/or sign the contract document.
                </span>
                <span className={text}>
                <span className={numspan}>15.4 </span>   
                In order to use the services of queens, You are required to register yourself by verifying the authorized device. This Privacy Policy applies to your information that we collect and receive on and through Doctor 24×7; it does not apply to practices of businesses that we do not own or control or people we do not employ.
                </span>
                <span className={text}>
                <span className={numspan}>15.5 </span>   
                By using this Application, you agree to the terms of this <span className='text-link underline cursor-pointer' onClick={()=>{}}>Privacy Policy</span>
                </span>
                <span className={text}>
                </span>
            </div>

            <div className='w-full flex items-center justify-center my-20'>
                <button className='flex items-center bg-white text-black hover:bg-black hover:text-white text-lg rounded-full py-2 px-6 border border-black w-auto transition duration-300'>
                    Continue
                    <img src={back_svg} alt="dropdown" className={`inline-block w-5 h-4 ml-1 transform rotate-[180deg] text-white`} />
                </button>
            </div>
        </section>
    )
}

export default TermsOfService