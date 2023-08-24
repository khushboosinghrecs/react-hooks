import React from 'react'
import { Provider } from 'react';
import store from './Store';
import CounterComponent from './CounterComponent';
function App() {
  return (
<Provider store ={store}>
<div className='App'>
    <CounterComponent />
</div>
</Provider>
  )
}

export default App