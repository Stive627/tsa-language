import React, { useEffect, useState } from 'react'

function Achievement({number, symbol, duration = 50, }) {
    const [dynamicNumber, setDynamicNumber] = useState(0)
    useEffect(()=>{
        if(dynamicNumber < number){
            const timer = setTimeout(() => {
                            setDynamicNumber(dynamicNumber + 1)
                        }, duration);
            return ()=> clearTimeout(timer)
        }
    }, [dynamicNumber])
  return (
        <h2 className=' text-center text-[30px] lg:text-[40px] font-bold'>{number === 49 ? dynamicNumber/10 :dynamicNumber}{symbol} </h2>
  )
}

export default Achievement