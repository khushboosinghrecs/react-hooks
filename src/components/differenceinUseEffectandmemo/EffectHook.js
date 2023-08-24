import React, { useEffect, useState } from 'react'

function EffectHook() {
    const [count, setCount] = useState(0);
    const incbuttod = (a, b)=>{
        return a+b;
    }
useEffect(()=>{
setCount()
}, [count])
  return (
    <div> {Count} <button onClick={incbuttod(a , b)}>increament</button></div>
  )
}

export default EffectHook