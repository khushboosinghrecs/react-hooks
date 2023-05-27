import { useCallback, useState } from "react"
import Todos from "./ToDo";

const Callbackhook =() =>{
    const [count, setCount] = useState(0);

    const[todos, setTodos] = useState([]);

    const increament =() =>{
        setCount(count +1);
    }

    const addTodo = useCallback(()=>{
       return  setTodos((prev) =>[...prev, 'New Entry'])
    }, [todos]);

    return (
        <>
        <Todos todos ={todos} addTodo={addTodo}></Todos>

        <hr />
        count :{count}
        <button onClick={increament}>+</button>
        </>
    )
}

export default Callbackhook;