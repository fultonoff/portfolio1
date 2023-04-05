import React from 'react'
import Title from '../components/Title'
import funfactImage from '../assets/funfact.png'
import Image from 'next/image'
import {funFacts} from '../constants'

function FunFacts() {
  return (
    <section className='bg-dark font-fira py-[88px]'>

<Title name='my-fun-facts'/>

        <div className='maxWidth mx-auto bg-dark flex justify-between items-start'>
            <div className='flex flex-wrap gap-[16px] text-light'>
                {funFacts.map((fact, index)=>{
                    const firstLetter = fact.fact.slice(0, 1).toUpperCase()
                    const secondLetter = fact.fact.slice(1)
                    return(
                        <div key={index} className='border border-light p-[8px]'>
                            <h1>{`${firstLetter}${secondLetter}`}</h1>
                        </div>
                    )
                })}
            </div>
            <div className='hidden md:flex'>
                <Image src={funfactImage} alt=''/>
            </div>
        </div>
    </section>
  )
}

export default FunFacts