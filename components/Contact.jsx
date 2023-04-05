import React from 'react'
import { BsInstagram, BsEnvelope } from "react-icons/bs";
// import { Tilt } from 'react-tilt'

function Contact() {
  return (
    <section className='bg-dark pb-[146px]'>

        <div className='maxWidth mx-auto mt-[116px] bg-dark p-2'>
        <div className='flex items-center gap-2 mb-[23px]'>
            <h1 className='font-fira font-medium text-[32px] text-white'><span className='text-primary'>#</span >contacts</h1> <div className='h-[1px] w-[10%] bg-primary'></div>
        </div>

        <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex-1 font-medium text-light'>
            <p>I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me</p>
            </div>

            

            <div className='flex-1'>
                <div className='border-2 border-light md:w-fit ml-auto'>
                    <h1 className='text-white p-[8px] font-fira font-semibold text-[16px]'>Message me here</h1>
                    <div>
                        <div className='flex items-center gap-2 text-[16px] text-light font-normal p-[8px]'>
                            <BsInstagram/>
                            <span>Fulton_kilebe</span>
                            
                        </div>
                        <div className='flex items-center gap-2 text-[16px] text-light font-normal p-[8px]'>
                            <BsEnvelope/>
                            <span>Fultonsuperbe@gmail.com</span>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>


        </div>
    </section>
  )
}

export default Contact