import logo from './logo.svg';
import React from 'react';
import './App.css';
import UseState from './components/useState/UseState';
import UseStatObject from './components/useState/UseStateObject';
import UseEffect from './components/useEffect/useEffect';
import CleauUp from './components/useEffect/CleanUp';
import UseReducer from './components/useReducer/UserReducer';
import UseRefHook from './components/UseRef/RefHook1';
import RefHook from './components/UseRef/RefHook';
import UseMemoHook from './components/useMemo/MemoHook';
import Callbackhook from './components/useCallback/UseCallback';
import LayOutEffect from './components/UseLayOut/UseLayOuthook'
import AddToCart from './components/commonProblems/AddToCart';
import { GitSearch } from './components/commonProblems/GitSearch';
import MainVedio from './components/commonProblems/vedio/Mainvedio';
import { Bmicalculator } from './components/commonProblems/Bmicalculator';
import ToDo from './components/useCallback/ToDo';
import CheckUseEffect from './CheckUseEffect';
import ControlledComponent from './components/ControlledandUncontrolled/ControlledComponent';
import UncontrolledComponent from './components/ControlledandUncontrolled/UncontrolledComponent';
import LoginForm from './components/ControlledandUncontrolled/ExControlled';
import Modal from './components/ControlledandUncontrolled/ExUnControlles';

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseStatObject /> */}
      {/* <UseEffect /> */}
      {/* <CleauUp /> */}
      {/* <UseReducer /> */}
      
      {/* <UseRefHook/> */}
      {/* <RefHook /> */}
      {/* <  UseMemoHook /> */}
      {/* <Callbackhook /> */}
      {/* <LayOutEffect /> */}

      {/* common problem react problem */}

      {/* <AddToCart /> */}
      {/* <GitSearch /> */}
      {/* <MainVedio /> */}
      {/* <Bmicalculator /> */}
      {/* <CheckUseEffect/> */}

      {/* react Projects */}
      {/* <ToDo /> */}
      <ControlledComponent/>
      <UncontrolledComponent />
      <LoginForm />
      <Modal />

    </div>
  );
}

export default App;
