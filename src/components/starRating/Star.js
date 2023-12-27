import React from "react";
import './star.css';

const Star =({filled , onclick})=>{
    const starClassName = filled ? 'star filled' : Star;
    return <span className={starClassName} onClick={onclick}></span>
}

export default Star;