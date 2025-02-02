import React, { useState } from 'react'
import Logo from './components/Logo'
import Calculator from './components/Calculator'
import Calculated from './components/Calculated'

const App = () => {

  const [calculated, setCalculated] = useState({
    tipAmount: 0.00,
    totalAmount: 0.00
  })

  
  return (
    <div className='flex flex-col justify-center items-center w-full h-[100vh] gap-y-20'>
      <Logo />
      <div className='rounded-2xl h-100 w-270 bg-white flex'>
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