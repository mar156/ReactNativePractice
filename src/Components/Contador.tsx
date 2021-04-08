import React, {useState} from 'react';

export const Contador=()=>{
    var [count, setCount] = useState(0);
 
    const addOne=()=>{
       setCount(count+1)
    }
    const lessOne=()=>{
        setCount(count-1)
    }

    return(
        <>
           <h3>Contador: <small>{count}</small></h3>
           <button onClick={addOne} className="btn btn-primary">
               +1
           </button>
           &nbsp;
           <button  onClick={lessOne}
               className="btn btn-primary">
                   -1
           </button>
        </>
    )
}