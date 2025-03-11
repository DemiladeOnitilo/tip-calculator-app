import React from 'react'

const MainInput = (props) => {
  
  let message = props.error

  function handleSubmit(){
    props.errorMessage()
  }

  function handleChange(event){
    props.setState(event.target.value)
  }

  return (
    <div className='relative w-[100%] lg:w-full' onSubmit={handleSubmit}>
        <label htmlFor={props.label} className='dark-grayish-cyan tracking-widest'>{props.label}</label>
        <input id={props.label} type="number" placeholder='0' value={props.value} onChange={handleChange}  className={ message ? 'very-light-grayish-cyan-bg grayish-cyan text-2xl text-right  h-12 w-full lg:w-full cursor-pointer input-error rounded-lg' : 'very-light-grayish-cyan-bg grayish-cyan text-2xl text-right  h-12 w-[100%] lg:w-full cursor-pointer rounded-lg'}/>
        <p className='text-red-600 absolute right-0 lg:right-2 top-0 '>{message}</p>
        <img src={props.img} alt={props.alt} className='absolute top-10 ml-5' />
    </div>
  )
}

export default MainInput