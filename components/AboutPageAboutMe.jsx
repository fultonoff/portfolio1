import React from 'react'
import Image from 'next/image'
import imageAbout from '../assets/aboutmeImage.png'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

function AboutPageAboutMe() {
  return (
    <section className='flex flex-col md:flex-row justify-between mt-[8px] items-center gap-4'>
      <div className='flex-1 text-light font-normal text-[16px] z-10'>

        <div className='text-center md:text-left'>
        <h1 className='mb-[40px]'>Hello, I'm Fulton!</h1>
        <p className='mb-[40px]'>I’m a self-taught front-end developer based in Sweden. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
        <p>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>

        </div>

      </div>
      <ParallaxProvider>
            <Parallax translateY={[60,-70]}>
      <div className='flex-1'>
        <Image src={imageAbout} alt="" className='ml-auto'/>
      </div>
      </Parallax>
            </ParallaxProvider>
    </section>
  )
}

export default AboutPageAboutMe