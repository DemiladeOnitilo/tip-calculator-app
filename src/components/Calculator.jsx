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
    
    function calculate (tipAmount ,totalAmount, totalOverall) {
        setCalculated({
            tipAmount,
            totalAmount,
            totalOverall
        })
    }

    function handleSubmit() {
        let billAmount = parseFloat(bill);
        let peopleCount = parseInt(numberOfPeople);
    
        // 🔥 Stop calculations if bill or number of people is empty/zero
        if (!billAmount || !peopleCount) {
            setCalculated({ tipAmount: 0, totalAmount: 0, totalOverall: 0 });
            setBillError(billAmount ? "" : "Can't be zero");
            setPeopleError(peopleCount ? "" : "Can't be zero");
            return;
        }
    
        let tipPercentage = customValue > 0 ? parseFloat(customValue) / 100 : parseFloat(tipRate) || 0;
        let tip = billAmount * tipPercentage;
        let tipPerPerson = tip / peopleCount;
        let totalPerPerson = billAmount / peopleCount; // 🔥 Keep total per person     
        let totalOverall =  tip + billAmount  
    
        setCalculated({
            tipAmount: Math.round(tipPerPerson * 100) / 100, // Split tip per person
            totalAmount: Math.round(totalPerPerson * 100) / 100, // Keep total as billAmount
            totalOverall: Math.round(totalOverall * 100) / 100
        });
    
        setCustomValue("");
        setBillError("");
        setPeopleError("");
    }    
    
  return (
        
        <form onSubmit={ (e) =>{handleSubmit(), e.preventDefault()}}  aria-label="Tip Calculator" className='h-auto w-[50%] flex flex-col justify-center items-center gap-y-10 m-10'>
        <div className='w-full'>
            <MainInput  
                label= 'Bill'
                img= {dollarIcon}
                alt='dollar sign'
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
            alt='person icon'
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