import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const settime = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);
  setTimeout(() => {
    clearInterval(settime);
  }, 5000);

  useEffect(() => {
    const settime = setInterval(() => {
      setCount2((prev) => prev + 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(settime);
    }, 5000);
    return () => {
      clearInterval(settime); 
    };
  }, []);
  
  return (
    <>
        <h2>count=  {count}</h2>
      <h1>count2 = {count2}</h1>
    </>
  );
};
export default UseEffect;
