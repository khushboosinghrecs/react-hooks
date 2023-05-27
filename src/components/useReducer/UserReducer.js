import { useReducer, useState } from "react"
import reducer from './UseReduce';
const UseReducer =()=>{
    // const [count, dispatch] = useState(0);
    const [count, dispatch] = useReducer(reducer, 10);
return(
    <>
    <button onClick={()=>dispatch({type: 'inc'})}>
        +
    </button>
    {count}
    <button onClick={()=>dispatch({type: 'dec'})}>
        -
    </button>
    </>
)
}

export default UseReducer;