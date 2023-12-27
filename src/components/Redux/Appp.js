import React from 'react'
import { Provider } from 'react';
import store from './Store';
import CounterComponent from './CounterComponent';
function Appp() {
  return (
<Provider store ={store}>
<div className='App'>
    <CounterComponent />
</div>
</Provider>
  )
}

export default Appp