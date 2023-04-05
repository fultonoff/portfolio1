import React from 'react'
import {smallProjects} from '../constants/index'
import { useRouter } from 'next/router'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';




const SmallProjectCard = ({index, title, name, label, url, description})=>{
    const router = useRouter()

   
    return(
        <div key={index} className='border border-light  break-inside-avoid mb-4'>
            <div className='flex gap-2 border-b border-light  text-light'>


            {title.map((title, index)=>{
                return(

                    <div className='flex'>

                        <h1 className='p-[8px]'>{title}</h1>
                    </div>
                )
            })}
            </div>
            <h2 className='text-white text-[24px] p-[16px] font-medium'>{name}</h2>
            <p className='font-normal text-[16px] text-light px-[16px]'>{description}</p>
            <div className='p-[16px]'>

            <button className='hover:bg-primary/50 duration-150 cursor-pointer border border-primary font-medium text-white text-[16px] py-[8px] px-[16px]
            ' onClick={()=> router.push(url, { target: '_blank'})}>
               {label} <span>{'<~>'}</span>
            </button>
            </div>

            

            
        </div>
    )
}


function SmallProjects() {
  return (
    
    <section className='bg-dark font-fira pt-[48px] pb-[187px]'>
        <div className='bg-dark maxWidth'>
            <div className='columns-1 md:columns-3 gap-8 p-2'>
                {smallProjects.map((project, index)=>{
                    return(
                        <SmallProjectCard {...project} index={index}/>
                    )
                })}
            </div>
        </div>
    </section>
    
  )
}

export default SmallProjects