import { useEffect, useState } from "react";

const CleauUp =()=>{
const [width, setWidth] = useState(window.screen.width);
const currentWidth =()=>{
    setWidth(()=>window.innerWidth);
}
useEffect(()=>{
    window.addEventListener('resize', currentWidth);

    return ()=>{
        window.removeEventListener('resize', setWidth);
    }
    })

return(
    <>
     The size of the window is <span> {width} </span>
    </>
)
}

export default CleauUp;