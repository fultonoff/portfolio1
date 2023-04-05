import React from 'react'
import PagesTitle from '../components/PagesTitle'
import { contacts } from '@/constants'
import { motion } from "framer-motion"

function contact() {
  return (
    <main className='bg-dark font-fira h-screen'>

      <motion.div className='bg-dark maxWidth mx-auto p-2'
      
      initial={{
        scale: 0
      }}
      animate={{
        scale: 1
      }}
      exit={{
        scale: 0
      }}
      transition={{
        duration: .1,
        type: "spring", stiffness: 1000,
        damping: 20
        
      }}
      >


      <div className='mt-[53px]'>
      <PagesTitle title='about-me' description='Who am i?'/>
    </div>

    <div className='flex flex-col md:flex-row mt-[46px] text-light gap-2'>
      <div className='max-w-[505px]'>
      I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
      </div>
      <div className='flex gap-2 flex-wrap'>
        {contacts.map((contact, index)=>{
          return(
            <div key={index} className='border '>
              <h1 className='px-[16px] pt-[16px] mb-[8px] text-white'>{contact.title}</h1>
              <p className='px-[16px] pb-[16px]'>{contact.detail}</p>
            </div>
          )
        })}
      </div>
    </div>



      </motion.div>
    </main>
  )
}

export default contact