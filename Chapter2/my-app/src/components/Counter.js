import { useRef, useState, useMemo } from "react";
function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
function Counter() {
  const [number, setNumber] = useState(1);
  let num = useRef(0);
  function handleClick(e) {
    e.stopPropagation();
    // setTimeout(() => {
    //if multiple clicks then all are reflected
    // but if number+1 only used then only once
    // }, 2000);
    setNumber((number) => number + 1);
    // setNumber((number) => number + 1);
    console.log(number);
    // setNumber(number + 1);
    // multiple times -> no use number -> snapshot
    num.current++; // doesn't makes the state re-render so different from state
    console.log(num.current);
  }

  const value = useMemo(() => fib(number), [number]);
  //keeps the value out of the component
  
  return (
    <>
      <div>
        {/* {fib(10)} */}
        {number} {num.current} {value}
      </div>
      <button onClick={handleClick}>Add</button>
    </>
  );
}
export default Counter;
