import React, { useState } from 'react'
const API_URL = 'https://api.github.com';
async function fetchResults(query){
try{
const response = await fetch(`${API_URL}/search/users?q=${query}`);
const json = await response.json();
console.log(json.items);
return json.items || [];
}
catch(e){
 throw new Error (e);
}
}

export const GitSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    function onSearchChange(event){
        setQuery(event.target.value);
    }
    async function onSearchSubmit(event){
        event.preventDefault();
        const result =await fetchResults(query);
        setResults(result);
    }
  return (
    <div>GitSearch
        <Form onChange={onSearchChange} onSubmit={onSearchSubmit} value={query}/>  
        result
        <div>
            {results.map((user)=>(
                <User key={user.login}
                    avatar={user.avatar_url}
                    url={user.html_url}
                    username={user.login}
                  />
            ))}
        </div>
        </div>
  )
}

function User({avatar, url, userName}){
    return(
        <div>
            <img src= {avatar} alt = 'profile' width='50' height='50' />
            <a href={url} target='_blank' rel ='noopener'>
                {userName}
            </a>
        </div>
    )

}

function Form({onSubmit, onChange, value}){
    return (
        <form onSubmit={onSubmit}>
            <input id='search' type='text' placeholder='Enter username or email' onChange={onChange}  value={value}/>
            <button type='submit'>submit</button>
        </form>
    )
}
