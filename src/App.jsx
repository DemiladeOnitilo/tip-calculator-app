import React, { useState } from 'react'
import Logo from './components/Logo'
import Calculator from './components/Calculator'
import Calculated from './components/Calculated'

const App = () => {

  const [calculated, setCalculated] = useState({
    tipAmount: 0.00,
    totalAmount: 0.00,
    totalOverall: 0.00
  })

  
  return (
    <div className='flex flex-col lg:justify-center items-center w-full h-screen gap-y-10 lg:gap-y-20 lg:mt-0 mt-12'>
      <Logo />
      <div className='rounded-2xl h-screen lg:h-100 w-screen lg:w-[70%] bg-white lg:flex lg:flex-row flex flex-col'>
        <Calculator 
          setCalculated={setCalculated}
          
        />
        <Calculated 
          calculated={calculated}
        />
      </div>
    </div>
  )
}

export default App