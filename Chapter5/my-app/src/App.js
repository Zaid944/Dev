import "./App.css";
import { useState, useEffect } from "react";
function App() {
  console.log("render");
  const [number, setNumber] = useState(0);
  const [running, setRunning] = useState(false);
  function clickHandler() {
    setRunning((running) => !running);
  }
  useEffect(() => {
    console.log("Entered");
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setNumber((number) => number + 1);
      }, 10);
    }
    console.log(intervalId);
    return () => clearInterval(intervalId);
  }, [running]);
  // console.log("here");
  return (
    <div className='App'>
      <header className='App-header'>{number}</header>
      <div>
        <button onClick={clickHandler}>{running ? "Stop" : "Start"}</button>
      </div>
    </div>
  );
}

export default App;
