import React from 'react'

const PercentageButton = (props) => {

  function clicked(event){
    let btnVal = event.target.value
    props.setState(btnVal)
  }

  return (
    <div className='w-[100%]'>
        <button type='submit' value={props.value} onClick={clicked} className='very-dark-cyan-bg text-white font-bold w-[100%] lg:w-full h-10 rounded-md text-xl cursor-pointer '>{props.num}</button>
    </div>
  )
}

export default PercentageButton