import React, { useState } from 'react'
// A controlled functional component is a component that receives its current value and update callback via props. For example, consider a simple form that accepts an email address and a password:

const ControlledInput = ({value, onChange} )=>(
    <input value={value} onChange={(e)=>onChange(e.target.value)} />
)
function ControlledComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("without callback");
        console.log("email", email);
        console.log('password', password);

    }

  return (
    <form onSubmit={handleSubmit}>
         <div>ControlledComponent</div>
         <ControlledInput value={email} onChange={setEmail} placeholder = "Email" />
         <ControlledInput value={password} onChange={setPassword} placeholder = "password"/>

         <button> Submit </button>
    </form>
   
  )
}

export default ControlledComponent