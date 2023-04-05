import React from 'react'
import PagesTitle from '../components/PagesTitle'
import Title from '../components/Title'
import AllProjects from '../components/AllProjects'
import { motion } from "framer-motion"
import SmallProjects from '@/components/SmallProjects'


function projects() {
  return (
    <motion.section className='bg-dark font-fira'
    
    
    
    >
      <motion.div className='maxWidth mx-auto pt-[53px]'
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

    <PagesTitle title='projects' description='List of my projects'/>

    <div className='mt-[70px]'>

    <Title name='complete-apps'/>
    </div>
      <div className='pb-[70px]'>
    <AllProjects/>

      </div>
      <div className='mt-[70px]'>

    <Title name='small-projects'/>
    </div>

    <SmallProjects/>
      </motion.div>
    </motion.section>
  )
}

export default projects