import React ,{useRef} from 'react';

const RefHook = () =>{
    const inputRef = useRef();
    const changeBorder = ()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor= '#82E0AA';
    }
    return (
        <>
        <input style ={{border:'1px solid black'}}type='text' ref ={inputRef}/>
        <button onClick={changeBorder}>submit</button>
        </>
    )
}

export default RefHook;