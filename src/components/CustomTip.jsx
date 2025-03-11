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
    <div className='w-[100%]'>
        <input type="number"  placeholder='Custom'  value={props.value} onSubmit={onSubmit} onChange={onChange} className='cursor-pointer very-light-grayish-cyan-bg w-[100%] lg:w-full h-10 text-center text-xl very-dark-cyan'/>
    </div>
  )
}

export default CustomTip