// App.js
import React from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from './store';

function Apps() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default Apps;
