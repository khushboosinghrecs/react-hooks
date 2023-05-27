import { useEffect, useState } from "react"

const UseEffect =()=>{
    const [count, setCount] =useState(0);
    const CountUpdate =(val) =>{
        if(val =='inc') return setCount(count+1);
        if(val =='dec') return setCount(count -1);
    }
    console.log('render');
    useEffect(()=>{
        console.log('re-render');

 } ,[count])
    return(
        <>
        <button onClick={()=>CountUpdate('inc')}>+</button>
        {        console.log('return-render')}

        <h1>{count}</h1>
        <button onClick={()=>CountUpdate('dec')}>-</button>
        </>
    )
}
export default UseEffect;