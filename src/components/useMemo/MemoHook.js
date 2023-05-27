import React, { useMemo, useState } from "react"

const UseMemoHook =() =>{
    const [myNum, setMyNum]  = useState(0);
    const [show, setShow] = useState(false);
    console.log('before return');
    const getValues = ()=>{
        console.log('getvalues');
        return setMyNum(myNum+1);
    }

    const countNumber = (num ) =>{
        console.log('countnumber');
        for (let i=0; i<1000000000; i++){}
        return num;
    }

    const CheckData = useMemo(()=>{
        console.log('checkData');
        return countNumber(myNum);
    }, [myNum]);


    

    

    return(
        <>
        {console.log('render')}
        <button onClick={getValues}>Counter</button>
        {console.log('render')}
        <p>My new number : { CheckData }</p>
        {console.log('render')}

        <button onClick={()=>setShow(!show)}>{show ?'You clicked me' : 'Click me pls'}</button>
        </>
    )

}

export default UseMemoHook;