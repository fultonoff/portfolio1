import PagesTitle from '@/components/PagesTitle'
import React from 'react'
import imageAbout from '../assets/aboutmeImage.png'
import AboutPageAboutMe from '../components/AboutPageAboutMe'
import AboutSkills from '../components/AboutSkills'

import FunFacts from '../components/FunFacts'
import { motion } from "framer-motion"

function about() {
  console.log(imageAbout);
  return (
    <main className='bg-dark font-fira'>
        <motion.div className='maxWidth mx-auto p-2'
        
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

    <AboutPageAboutMe/>
    <AboutSkills/>
    <FunFacts/>


        </motion.div>
    </main>
  )
}

export default about