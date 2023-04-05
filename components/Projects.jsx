import React from 'react'
import { works } from '@/constants'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
// import { Tilt } from 'react-tilt'

function ProjectCard({ image, name, technologies, description, url }) {


    return (

        
            <div className=' w-[330px]  border border-light break-inside-avoid bg-dark'>

                <div>
                    <Image src={image} alt='name' className='w-full' />
                </div>

                <div className='flex flex-wrap gap-1'>
                    {technologies.map((technology, index) => {
                        return (
                            <div key={index} className='font-fira text-[16px] text-light p-[8px]'>{technology}</div>
                        );
                    })}
                </div>

                <div className='p-[16px] border-t border-light'>
                    <h1 className='text-white font-fira font-medium text-[24px]'>{name}</h1>
                    <p className='font-normal text-light mt-[16px]'>{description}</p>
                    <div>
                        <button className='outline-none text-[16px] text-white border border-primary py-[8px] px-[16px] duration-150 hover:bg-primary/50 mt-[16px]'>Live <span>{'<~>'}</span></button>
                    </div>
                </div>


            </div>
        
    );
}

function Projects() {
    const router = useRouter()
  return (
    <section className='bg-dark w-full'>
        <div className='bg-dark maxWidth mx-auto p-2'>

            <div className='flex justify-between gap-3'>

                <div className='flex items-center gap-1 flex-1'>
                <h1 className='font-fira font-medium text-[32px] text-primary'>#<span className='text-white'>projects</span></h1>
                <div className='w-[60%] md:w-[50%] h-[1px] bg-primary'></div>
                </div>

                <button className='front-fira font-medium text-[16px] text-white w-fit' onClick={() =>router.push('/projects')}>
                   <span>View all</span> <span className='font-fira'> {'~~>'} </span>
                </button>
            </div>

            <ParallaxProvider>
            <Parallax rotateY={[360,300]}>
            <div className='flex flex-wrap items-start justify-center md:justify-start gap-2 mt-[48px] '>
                {works.map((work, index)=>{
                    return(

                        

                            <ProjectCard key={index} {...work} className=''/>
                        
                    )
                })}
            </div>
            </Parallax>
            </ParallaxProvider>


        </div>
    </section>
  )
}

export default Projects