import { useState } from "react"

const UseStatObject = ()=>{
const [formData, setFormData] = useState({
    userName : '',
    email : '',
    password: '',
    confrim_password : ''
});
const [name, setName] = useState('');
const handleChange =(e)=>{
    // console.log(e);
   let ename= e.target.name;
    let value = e.target.value;
    console.log(ename, value)

    setFormData(prev=>{ return {...prev, [ename]: value}});
}
return (
    <>
    <input style={{border: `1px solid black`}} type="text" name="userName" placeholder="name" value={formData.userName} onChange={handleChange} />
    <input style={{border: `1px solid black`}} type="text" name="email" placeholder="email" value={formData.email} onChange={handleChange} />
    <input style={{border: `1px solid black`}} type="text" name="password" placeholder="passweor" value={formData.password} onChange={handleChange} />
    <input style={{border: `1px solid black`}} type="text" name="confrim_password" placeholder="confirm_passoword" value={formData.confrim_password} onChange={handleChange} />


    <input style={{border: `1px solid black`}} type="text" name="userName" value={name} onChange={(e)=> {console.log(e);setName(e.target.value)}} />

    </>
)
}

export default UseStatObject;