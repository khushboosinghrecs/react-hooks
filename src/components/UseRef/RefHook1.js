import { useEffect, useState , useRef} from "react"

const UseRefHook = () => {

    const [userInput, setUserInput] = useState('');
    // const [count, setCount] = useState(0);
    const count = useRef(0);

    console.log('count before return', count);
    useEffect(()=>{
        count.current = count.current+1;
        console.log('count useeffect return', count)
        // setCount(count +1);
    });
    return(
        <>
        <div>
        <p>the number of times comp render:{count.current} </p>
    <input style={{border: '1px solid black'}} type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
    </div>
    </>
)}

export default UseRefHook