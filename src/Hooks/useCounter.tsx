import React, {useState} from 'react'

export const useCounter=(inicial:number=10)=>{
    var [count, setCount] = useState(inicial);
 
    const acumular=(numero:number)=>{
       setCount(count+numero)
    }
   
    return {
        count,
        acumular
    }
}