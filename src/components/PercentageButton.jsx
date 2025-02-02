import React from 'react'

const PercentageButton = (props) => {

  function clicked(event){
    let btnVal = event.target.value
    props.setState(btnVal)
  }

  return (
    <div>
        <button type='submit' value={props.value} onClick={clicked} className='very-dark-cyan-bg text-white font-bold w-full h-10 rounded-md text-xl cursor-pointer '>{props.num}</button>
    </div>
  )
}

export default PercentageButton