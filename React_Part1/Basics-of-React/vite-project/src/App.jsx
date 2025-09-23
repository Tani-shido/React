import { useState, useEffect } from "react"; 
//useState let's us update the state variables

function App() {

  // Conditional rendering 2 (needs to be in App())
  let [counterVisible , setCounterVisible] = useState(true); 
    useEffect(function () {  
      setInterval(function() {
        setCounterVisible(c => !c);
      }, 5000)
    } , []);

    

  return <div>
    <div>
      <Counter />
    </div>
    <div>
      <Interval></Interval>
    </div>
    <div>
      {counterVisible ? <ConditionalRendering></ConditionalRendering> : null}
    </div>
  
  </div>
}

// counter
function Counter(){

  const [count, setCount] = useState(0); //Defining state variable

  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }
  
  /* count is a state variable because it's value changes and HERE WE RENDER IT */
  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase Count</button> 
    <button onClick={decreaseCount}>Decrease Count</button>
    <button onClick={resetCount}>Reset Count</button>

  </div>
}

// setInterval
function Interval() {
  const [timer, setCount] = useState(0);
  
  useEffect(function () {  
    setInterval(function() {
      setCount(timer => timer + 1);
    }, 1000)
  } , []);

  return <div>
    <h1>setInterval = {timer}</h1>
  </div>
}

// Conditional rendering 1
function ConditionalRendering() {
  const [timer, setCount] = useState(0);
  
  useEffect(function () {  
    let clock = setInterval(function() {
      setCount(timer => timer + 1);
    }, 1000)

    return  function () {
      clearInterval(clock); //cleanup
    } 
  } , []);

  return <div>
    <h1>Conditional rendering every 5 sec = {timer}</h1>
  </div>
}

export default App
