import React, { useState } from 'react'

const UseState =()=>{
    const [count, setCount] = useState(0);
    const increament =()=>{
        setCount(count+1);
        setCount(count+1);
    }
console.log('outside');
    return(
        <>
        <button onClick={()=>setCount(count+1)}>
+
        </button>
{console.log('inside')}
        <h1>{count}</h1>
        <button style={{color: 'black'}} onClick={()=> count<=0 ? 0:setCount(count -1)}>-</button>
        </>
    )
}

export default UseState;