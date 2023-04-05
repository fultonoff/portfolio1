import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

function Quote() {
  return (
    <ParallaxProvider>
       <Parallax translateX={[-20, 60]}>
    <div className='mt-[113px] flex flex-col items-center p-2 '>

        <div className='mb-[75px]'>

                <div className='border relative'>
                    <RiDoubleQuotesL className='absolute left-2 -top-5 text-light bg-dark text-[41px]'/>
                    <h1 className='text-white text-[24px] font-fira p-[32px]'>With great power comes great electricity bill</h1>
                </div>

                <div className='ml-auto w-fit relative'>
                    <RiDoubleQuotesL className='absolute right-2 -top-5 text-light bg-dark text-[41px]'/>
                    <h1 className='text-white font-normal text-[24px] border p-[16px]'>- Dr. Who</h1>
                </div>

        </div>

     </div>
     </Parallax>
     </ParallaxProvider>
  )
}

export default Quote