import React from 'react'
import { useNavigate } from 'react-router'
import { Q_svg, back_svg } from '../Assets'

const PrivacyPolicy = () => {
    const title = "roboto font-bold text-active_text mb-3 text-lg"
    const text = "roboto leading-tight text-md mb-6 text-label"

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
                <h1 className='bricolage flex-grow text-center font-bold text-2xl md:text-4xl'>Privacy Policy</h1>
            </div>
            </div>

            <div className='px-5 md:max-w-[80%] mx-auto'>
                <h2 className={title}>1. Types of data we collect</h2>
                <p className={text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <br /> <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>

                <h2 className={title}>2. Use of your personal data</h2>
                <p className={text}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
                    <br /> <br />
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>

                <h2 className={title}>3. Disclosure of your personal data</h2>
                <p className={text}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    <br /> <br />
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                    <br /> <br />
                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus
                </p>
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

export default PrivacyPolicy