import React, { useEffect, useMemo, useState } from 'react';

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

export const Bmicalculator = () => {

    const [height, setHeight] = useState(DEFAULT_HEIGHT);
    const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  const  checkInput = (e) =>{
    console.log(e.target.value)
  }
  const checkHeight = (e) =>{
    const inputHeight = e.target.value;
    setHeight(inputHeight);
  }

  const checkWeight = (e) =>{
    console.log(e.target.value);
    const inputWeight = e.target.value;
    setWeight(inputWeight);
  }
  useEffect(()=>{
    console.log('useEffect');
  }, [weight, height])

  console.log('render')
  const output = useMemo (()=>{
    console.log('usememo')
    const calculateHeight = height/100;
    return (weight/(calculateHeight * calculateHeight)).toFixed(1);
  },[weight, height])
  return (
    <div >
        <h1>BMI Calculator</h1>
        <input type='range' onChange={checkWeight } />
        <input type='range' onChange={checkHeight} />
        <h2>Your Bmi is</h2>
        <p>
            {output}
        </p>

    </div>
  )
}
