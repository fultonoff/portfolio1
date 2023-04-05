import React from 'react'
import Title from '../components/Title'
import { skills } from '@/constants'


const SkillCard = ({title, technologies, index})=>{
  return(

  

      <div className='border border-light w-[80%] md:w-[192px]' key={index}>

        <div>

          <h1 className='p-[8px] border-b border-light text-white font-semibold text-[16px]'>{title}</h1>
          <div className='flex flex-wrap'>
              {technologies.map((technology, index)=>{
                  return(
                      <p key={index} className='text-light p-[8px] text-[16px] font-normal'>{technology}</p>
                      )
                  })}
          </div>
        </div>
      </div>
                  
  )
}


function AboutSkilld() {
  return (
    <section className='mt-[112px] bg-dark font-fira'>
      <div>
        <Title name='skills'/>

        <div className='flex flex-col md:flex-row items-center md:items-start gap-2 mt-[51px]'>
          {skills.map((skill, index)=>{
              return(
                <SkillCard index={index} {...skill}/>
              )
          })}
        </div>
      </div>
      

    </section>
  )
}

export default AboutSkilld