import { useState } from "react";

const AddToCart = ()=>{
    const [item, setItem] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const input = form.item;
        setItem([...item, input.value]);
        console.log(item);
        form.reset();
    }
    const onRemove =(itemtoremove)=>{
        const newItem = item.filter((item, i)=>{
            return i !==itemtoremove;
        })

        setItem(newItem);
    }
return(
    <>
    <h1>
        Shopping Cart
    </h1>
    <h2>Items to Buy</h2>
    <form onSubmit={handleSubmit}>
        <input type='text' name='item' placeholder="Add a new item"  required/>
        <button >AddToCart</button> 
    </form>
    {
        item.map((itme, i)=>(
            <Item  key ={i} item={itme} i={i} onRemove={onRemove}/>
        ))
    }
    </>
)
}

function Item({item,i, onRemove}) {
    return(
        <li>
            {item}
            <button onClick={()=>onRemove(i)} >X</button>
        </li>
)}

export default AddToCart;