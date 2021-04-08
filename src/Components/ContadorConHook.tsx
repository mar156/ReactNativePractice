import React, {useState} from 'react';
import {useCounter} from '../Hooks/useCounter'

export const ContadorConHook=()=>{
    const {count, acumular} = useCounter(100);

    return(
        <>
           <h3>Contador: <small>{count}</small></h3>
           <button onClick={()=> acumular(1)} className="btn btn-primary">
               +1
           </button>
           &nbsp;
           <button  onClick={()=>acumular(-1)}
               className="btn btn-primary">
                   -1
           </button>
        </>
    )
}