import React from 'react'

const Total = (props) => {
  return (
    <div className='flex justify-between items-center w-[80%] lg:w-[90%] mt-2 lg:mt-0'>
        <div>
            <h2 className='text-white'>{props.name}</h2>
            <p className='grayish-cyan text-sm'>{props.subname}</p>
        </div>
        <div className='flex items-center strong-cyan'>
            <img src={props.img} alt={props.alt} className='h-6'/>
            <p className='text-5xl'>{props.value}</p>
        </div>
    </div>
  )
}

export default Total