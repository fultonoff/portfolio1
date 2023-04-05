import React from 'react'
import logo from '../public/images/logowhite.png'
import Image from 'next/image'

function Footer() {
  return (
    <footer className=' bg-dark border-t border-light'>

<div className=' bg-dark mt-[32px] maxWidth mx-auto p-2'>
    <div className='flex  flex-col items-center'>
        <div className=''>
            <div className='flex flex-wrap items-center gap-4'>
                <Image src={logo} alt='logo' className='w-20'/>
                <p className='text-light font-normal font-fira'>fultonsuperbe@gmail.com</p>
            </div>

            <p className='mt-[16px] font-fira text-white'>Web designer and front-end developer</p>
        </div>

        <p className='mt-[48px] text-[11px] font-fira text-light pb-10'>© Copyright {new Date().getFullYear()}. Made by Fulton</p>
        
    </div>
</div>
    </footer>
  )
}

export default Footer