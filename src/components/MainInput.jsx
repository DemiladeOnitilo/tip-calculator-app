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
    <div className='relative' onSubmit={handleSubmit}>
        <label className='dark-grayish-cyan tracking-widest'>{props.label}</label>
        <input type="number" placeholder='0' value={props.value} onChange={handleChange}  className={ message ? 'very-light-grayish-cyan-bg grayish-cyan text-2xl text-right  h-12 w-full cursor-pointer input-error rounded-lg' : 'very-light-grayish-cyan-bg grayish-cyan text-2xl text-right  h-12 w-full cursor-pointer rounded-lg'}/>
        <p className='text-red-600 absolute right-2 top-0 '>{message}</p>
        <img src={props.img} className='absolute top-10 ml-5' />
    </div>
  )
}

export default MainInput