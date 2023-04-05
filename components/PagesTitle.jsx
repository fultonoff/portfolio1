import React from 'react'
const title = 'hello world'
const description = 'Supa'
function PagesTitle({title, description}) {
  return (
    <div className='p-2'>
        <h1 className='text-[32px] font-semibold text-white mb-[14px]'><span className='text-primary'>/</span>{title}</h1>
        <p className='text-white font-normal text-[16px]'>{description}</p>
    </div>
  )
}

export default PagesTitle