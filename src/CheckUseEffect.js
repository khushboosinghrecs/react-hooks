import { useEffect } from "react"


function CheckUseEffect() {
  {console.log('hello world not in return')}
  useEffect(()=>{
    console.log('hello world in useEffect');
  })
  return (
    <>
    { console.log('hello world in return')  }
    <div>CheckUseEffect</div>
    </>
  )
}

export default CheckUseEffect