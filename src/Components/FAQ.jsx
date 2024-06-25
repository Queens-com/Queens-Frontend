import React from 'react'
import Question from './Question'

const FAQ = () => {
    return (
        <section className='flex flex-col items-center px-5 lg:px-[12rem] mt-10'>
            <span className='block bricolage font-bold text-3xl mb-10'>
                Frequently Asked Questions
            </span>
            <div className='flex flex-row w-full flex-wrap'>
                <div className='flex flex-col justfiy-center'>
                    <Question />
                    <Question />
                    <Question />
                    <Question />

                    <Question />
                    <Question />
                    <Question />
                    <Question />
                </div>
            </div>
        </section>
    )
}

export default FAQ