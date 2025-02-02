import React, { useState } from 'react'
import MainInput from './MainInput'
import dollarIcon from '../assets/images/icon-dollar.svg'
import personIcon from '../assets/images/icon-person.svg'
import PercentageButton from './PercentageButton'
import CustomTip from './CustomTip'

const Calculator = ({setCalculated}) => {

    const [customValue, setCustomValue] = useState("")
    const [tipRate, setTipRate] = useState("")
    const [bill, setBill] = useState("")
    const [numberOfPeople, setNumberOfPeople] = useState("")
    const [billError, setBillError] = useState("")
    const [peopleError, setPeopleError] = useState("")
    
    function calculate (tipAmount ,totalAmount) {
        setCalculated({
            tipAmount,
            totalAmount,
        })
    }

      function handleSubmit(){
        let tip = tipRate * bill
        if (customValue > 0) {
            let customVal = customValue/100
            tip = customVal * bill
        } 
        let total =  bill
        
        if (numberOfPeople > 0) {
            tip = tip / numberOfPeople
            total = total / numberOfPeople
        } else {
            tip= '0'
            total= '0'
        }
        setCalculated({
            totalAmount: Math.round(total *100)/100,
            tipAmount: Math.round(tip * 100)/100,
        })

        setCustomValue('')

        if(bill > 0){
            setBillError("")
        } else {
            setBillError("Can't be Zero")
        }

        if(numberOfPeople > 0){
            setPeopleError("")
        } else {
            setPeopleError("Can't be Zero")
        }
    }
  return (
        
        <form onSubmit={ (e) =>{handleSubmit(), e.preventDefault()}} className='h-auto w-[50%] flex flex-col justify-center items-center gap-y-10 m-10'>
        <div className='w-full'>
            <MainInput  
                label= 'Bill'
                img= {dollarIcon}
                setState = {setBill}
                errorMessage = {handleSubmit}
                error = {billError}
                value = {bill}
            />
        </div>
        <div className='flex flex-col gap-y-3' >
            <label className='dark-grayish-cyan'>Select Tip %</label>
            <div className='grid grid-row-2 grid-cols-3 gap-4'>
                <PercentageButton 
                    num= '5%'
                    value= '0.05'
                    setState = {setTipRate}
                />
                <PercentageButton 
                    num= '10%'
                    value= '0.1'
                    setState = {setTipRate}
                />
                <PercentageButton 
                    num= '15%'
                    value= '0.15'
                    setState = {setTipRate}
                />
                <PercentageButton 
                    num= '25%'
                    value= '0.25'
                    setState = {setTipRate}
                />
                <PercentageButton 
                    num= '50%'
                    value= '0.5'
                    setState = {setTipRate}
                />       
                <CustomTip
                    value={customValue}
                    setState={setCustomValue}
                    calculate={handleSubmit}
                />
               
            </div>
        </div>
        <div className='w-full'>
           <MainInput 
            label= 'Number of people'
            img={personIcon}
            setState={setNumberOfPeople}
            errorMessage = {handleSubmit}
            value = {numberOfPeople}
            error = {peopleError}
           />
        </div>
    </form>
  )
}

export default Calculator