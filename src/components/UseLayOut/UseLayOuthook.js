// useLayoutEffect, runs synchronously after a render but before
// the screen is updated.

import { useLayoutEffect, useState } from "react"

// useEffect runs asynchronously and after a render is painted to the screen.

const LayOutEffect = () =>{
    const [num, setNum] =useState(0);
    useLayoutEffect (()=>{
        if(num ==0) setNum (num + Math.random() *100);
    }, [num]);

    return(
        <>
        My New random number {num}
        <button onClick={()=>setNum(0)}>random Num</button>
        </>
    )

}

export default LayOutEffect;