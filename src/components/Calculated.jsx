import React from 'react' 
import Total from '../components/Total'
import dollarIcon from '../assets/images/icon-dollar.svg'

const Calculated = (calculated) => {

  return (
    <form className='h-auto lg:w-[50%] m-5 very-dark-cyan-bg rounded-2xl flex flex-col gap-y-5 lg:gap-y-2 p-8'>
        <div className='flex flex-col justify-center items-center gap-y-5 p-3 w-full'>
            <Total 
              name= 'Tip Amount'
              subname= '/ person'
              img= {dollarIcon}
              alt='dollar sign'
              value= {calculated.calculated.tipAmount ? calculated.calculated.tipAmount : '0.00' } 
              
            />
            
            <Total 
              name= 'Total'
              subname= '/ person'
              img= {dollarIcon}
              alt='dollar sign'
              value= {calculated.calculated.totalAmount ? calculated.calculated.totalAmount :'0.00' }
            />

            <Total 
              name= 'Total'
              subname= 'Overall'
              img= {dollarIcon}
              alt='dollar sign'
              value= {calculated.calculated.totalOverall ? calculated.calculated.totalOverall :'0.00' }
            />
            
        </div>
        <div className='text-center'>
            <button type='submit' value='reset' className='cursor-pointer dark-grayish-cyan-bg font-light w-full h-12 rounded-lg'>RESET</button>
        </div>
    </form>
  )
}

export default Calculated