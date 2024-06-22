import React from 'react'
import { useState } from 'react'
import { minus_img, plus_img } from '../Assets'

const Question = () => {
    const [open, setOpen] = useState(false)
    const handleClick = ()=>{
        setOpen(!open)
    }
  return (
    <div className={`1w-full p-2 my-2 flex flex-grow ${open?"border border-active_text":""}`}>
        <div className='ml-5 mr-2'>
            <button onClick={handleClick} className='w-[30px] h-[30px]'>
                <img src={open?minus_img:plus_img} alt="toggle anser" className='w-full h-auto'/>
            </button>
        </div>
        <div>

        <div className='text-xl font-semibold roboto'>
            Question Title
        </div>
        <div className={open?"roboto pr-10 text-placeholder_text block ease-in-out duration-300":"hidden"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat repellat dolorum facilis illo magnam fugiat vel maiores delectus earum, sequi molestias optio, nobis iste. Nobis ea eum nam tempore neque.
        </div>
        </div>
    </div>
  )
}

export default Question