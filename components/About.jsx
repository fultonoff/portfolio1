import React from 'react'
import aboutImage from '../assets/aboutmeImage.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import figure from '../assets/aboutmefigure.png'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';


function About() {
    const router = useRouter()

    const navigate = () =>{
        router.push('./about')
    }
  return (

    
    <section className='bg-dark relative'>

        <Image src={figure} alt='image' className='absolute right-0 hidden lg:flex top-[70%]'/>
        <div className='mt-[116px] maxWidth mx-auto p-2'>
        <div className='flex items-center gap-2 mb-[23px]'>
            <h1 className='font-fira font-medium text-[32px] text-white'><span className='text-primary'>#</span >about-me</h1> <div className='h-[1px] w-[30%] bg-primary'></div>
        </div>


        <div className='flex flex-col md:flex-row  md:items-start '>

            <div className='flex-1 w-50%'>
                <h3 className='text-[16px] font-fira text-light'>Hello, i'm Fulton!</h3>

                <p className='text-[16px] font-fira text-light mt-[40px]'>
                    
                    I'm a self-taught front-end developer based in Sweden. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
                    
                </p>
                <p className='text-[16px] font-fira text-light mt-[40px]'>
                    
                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks. 
                    
                </p>

                <button className='outline-none text-white px-[16px] py-[8px] border border-primary font-medium font-fira mt-[36px] cursor-pointer hover:bg-primary/50 duration-150' onClick={navigate}>
                    Read more <span>{'->'}</span>
                </button>
            </div>
            <ParallaxProvider>
            <Parallax translateY={[20,-70]}>
            <div className='flex-1'>
                <Image src={aboutImage} alt='image' className=' md:ml-auto'/>
            </div>
            </Parallax>
            </ParallaxProvider>
        </div>
        </div>
    </section>
  )
}

export default About