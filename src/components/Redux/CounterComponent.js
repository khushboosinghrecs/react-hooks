import React from 'react'
import {connect} from 'react-redux'
import { decreament, increament } from './Action'

function CounterComponent({count, increament, decreament}) {
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={increament}> increament</button>
        <button onClick={decreament}> decreament </button>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return{
        count: state
    }
}
export default connect(mapStateToProps, {increament, decreament})(CounterComponent);