import React, { useState } from 'react'
import logo from '../public/images/logowhite.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";





function Navbar() {
    const router = useRouter()
    const [show, setShow] = useState(false)

    const showNavigation =()=>{
        setShow(!show)
    }
  return (

    <div className='w-full bg-dark'>
    <nav className='maxWidth mx-auto bg-dark pt-[32px] pb-[8px] px-2 relative'>
        <div className='flex justify-between items-center'>
            <Image src={logo} className='w-[74px] h-[20px]' alt='logo'/>
            <ul className='md:flex items-center gap-[32px] hidden'>
                <li>
                    <Link href='/' className='flex items-center gap-1 font-fira text-[16px] font-medium group '>
                        <span className='text-primary'>#</span> <span className={router.pathname === '/' ? 'text-white ' : 'text-light group-hover:text-white duration-200'}>home</span>
                    </Link>
                </li>

                <li>
                    <Link href='/projects' className='flex items-center gap-1 font-fira text-[16px] font-medium group '>
                        <span className='text-primary'>#</span> <span className={router.pathname === '/projects' ? 'text-white ' : 'text-light group-hover:text-white duration-200'}>works</span>
                    </Link>
                </li>

                <li>
                    <Link href='/about' className='flex items-center gap-1 font-fira text-[16px] font-medium group '>
                        <span className='text-primary'>#</span> <span className={router.pathname === '/about' ? 'text-white ' : 'text-light group-hover:text-white duration-200'}>about-me</span>
                    </Link>
                </li>

                <li>
                    <Link href='/contact' className='flex items-center gap-1 font-fira text-[16px] font-medium group '>
                        <span className='text-primary'>#</span> <span className={router.pathname === '/contact' ? 'text-white ' : 'text-light group-hover:text-white duration-200'}>contacts</span>
                    </Link>
                </li>
                
            </ul>

        <div className='block md:hidden cursor-pointer' onClick={showNavigation}>
            

            {show ? <HiOutlineX className='text-light text-2xl'/>: <HiMenuAlt3 className='text-light text-2xl'/>}
        </div>


        </div>


        {/* Mobile nav */}

        {show && 
        
        <div className='block md:hidden w-fit ml-auto p-4 border-2 mt-5 border-light rounded-sm shadow-sm  bg-dark'>
        <ul className='md:flex flex-col items-end gap-[50px]' onClick={showNavigation}>
                <li>
                    <Link href='/' className='flex items-center gap-1 font-fira text-[16px] font-medium group '>
                        <span className='text-primary'>#</span> <span className={router.pathname === '/' ? 'text-white ' : 'text-light group-hover:text-white duration-200'}>home</span>
                    </Link>
                </li>

                <li>
                    <Link href='/projects' className='flex items-center gap-1 font-fira text-[16px] font-medium group '>
                        <span className='text-primary'>#</span> <span className={router.pathname === '/projects' ? 'text-white ' : 'text-light group-hover:text-white duration-200'}>works</span>
                    </Link>
                </li>

                <li>
                    <Link href='/about' className='flex items-center gap-1 font-fira text-[16px] font-medium group '>
                        <span className='text-primary'>#</span> <span className={router.pathname === '/about' ? 'text-white ' : 'text-light group-hover:text-white duration-200'}>about-me</span>
                    </Link>
                </li>

                <li>
                    <Link href='/contact' className='flex items-center gap-1 font-fira text-[16px] font-medium group '>
                        <span className='text-primary'>#</span> <span className={router.pathname === '/contact' ? 'text-white ' : 'text-light group-hover:text-white duration-200'}>contacts</span>
                    </Link>
                </li>
                
            </ul>
        </div>
        }

    </nav>
    </div>
  )
}

export default Navbar