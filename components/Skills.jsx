import React from 'react'
import skillImage from '../assets/skills-shape.png'
import Image from 'next/image'
import { skills } from '@/constants'
// import { Tilt } from 'react-tilt'


const SkillCard = ({title, technologies, index})=>{
        return(

        

            <div className='border border-light break-inside-avoid' key={index}>
                <h1 className='p-[8px] border-b border-light text-white font-semibold text-[16px]'>{title}</h1>
                <div className='flex flex-wrap'>
                    {technologies.map((technology, index)=>{
                        return(
                            <p key={index} className='text-light p-[8px] flex flex-wrap text-[16px] font-normal'>{technology}</p>
                            )
                        })}
                </div>
            </div>
                        
        )
}

function Skills() {
  return (
    <section className=''>

        <div className='mt-[97px] maxWidth mx-auto bg-dark p-2'>
        
        <div className='flex items-center gap-2'>
            <h1 className='font-fira font-medium text-[32px] text-white'><span className='text-primary'>#</span >skills</h1> <div className='h-[1px] w-[30%] bg-primary'></div>
        </div>
            <div className='flex flex-col-reverse gap-4 items-center md:items-start md:flex-row md:justify-between mt-[12px]'>

                <div className='flex-1'>
                <Image src={skillImage} alt='skill image' className='max-w-[300px] '/>

                </div>

                <div className='columns-1 md:columns-2 lg:columns-3  space-y-2 mx-auto flex-1'>
                    {skills.map((skill, index)=>{
                        return(
                            <SkillCard index={index} {...skill} key={index}/>
                        )
                    })}
                </div>
            </div>


        </div>
    </section>
  )
}

export default Skills