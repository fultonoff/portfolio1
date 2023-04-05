import React from 'react'

function Title({name}) {
  return (
    <div className='p-2'>
        <h1 className='text-[32px] font-medium text-white'><span className='text-primary'>#</span>{name}</h1>
    </div>
  )
}

export default Title