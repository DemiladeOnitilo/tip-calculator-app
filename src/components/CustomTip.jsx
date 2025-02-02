import React from 'react'

const CustomTip = (props) => {

      
    function onChange(event){
      let customValue = event.target.value
      props.setState(customValue)
    }

    function onSubmit(){
      props.calculate()
    }

  return (
    <div>
        <input type="number"  placeholder='Custom'  value={props.value} onSubmit={onSubmit} onChange={onChange} className='cursor-pointer very-light-grayish-cyan-bg w-full h-10 text-center text-xl very-dark-cyan'/>
    </div>
  )
}

export default CustomTip