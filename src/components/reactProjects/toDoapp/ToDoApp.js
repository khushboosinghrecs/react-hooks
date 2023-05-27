import { useState } from "react";

const ToDo = ()=>{
    const [todoval, setTodoVal] = useState('');
    const [todoList, setTodoList] = useState([]);
    const addList = (e)=>{
        setTodoList([...todoList, todoval])
        setTodoVal('');
    }
    return (
        < div>
            <input type="text" placeholder="todo list" value={todoval} onChange={(e)=>{setTodoVal(e.target.value)}} />
            <button onClick={()=>{addList}}>add</button>
            {
                todoList.length>0 && todoList.map((value, i)=>(
                     <div>{value}</div>
                ))
            }
        </div>
    )
}

export default ToDo;