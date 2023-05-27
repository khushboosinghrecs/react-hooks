import React from 'react'

export const Menu = ({onSelectVedio,videoValues}) => {
  return (
    <form onClick={(event)=>onSelectVedio(event.target.value)} >
        {
            videoValues.map((value, i) =>(
                <div>
                <input key={i} type='radio' name='src' value={value}/>
                {value}
                </div>
            ))
        }
    </form>
  )
}
