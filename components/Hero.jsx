import React from 'react'
import Image from 'next/image'
import heroImage from '../public/images/heroImage.png'
import { useRouter } from 'next/router'


function Hero() {
    
    const router = useRouter()
    
    
    return (
        
    <header className='py-[63px]' >

        <div className='maxWidth mx-auto bg-dark flex flex-col md: md:flex-row items-center md:items-start md:justify-between'>
            <div className='flex-1 text-center md:text-left'>
                <h1 className='font-semibold text-[32px] text-light'>Fulton is a <span className='text-primary'>web designer</span> and <span className='text-primary'>front-end developer</span></h1>
                <h3 className='text-light font-reg text-[16px] mt-[38px] w-full md:w-[400px]'>He crafts responsive websites where technologies meet creativity</h3>
                <button className='border-2 border-primary py-[8px] px-[16px] font-fira text-white hover:bg-primary/30 duration-150 my-[24px]' 
                
                onClick={()=> router.push('/contact')}>Contact me!!</button>
            </div>

            <div className='flex-1 flex flex-col items-center'>
                <Image src={heroImage}  className=' ml-auto' alt='hero-image'/>
                <div className='flex items-center font-fira font-medium text-light border py-[8px] w-[85%] md:w-[90%]'>
                   <div className='h-[16px] w-[16px] bg-primary mx-2 '>
                    <div className='h-[16px] w-[16px] bg-primary animate-ping'></div>
                    </div> <h2>Currently working on <span className='text-white'>Portfolio</span></h2>
                </div>
            </div>

            
        </div>

        

    </header>
   
  )
}

export default Hero