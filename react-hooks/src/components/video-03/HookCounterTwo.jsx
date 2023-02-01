import React, { useState } from 'react'

//State with previous state: anytime you need to update state value based on the previous state value always go with the safe option of passing in a function that will set the new state value

function HookCounterTwo() {

  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  
  const incrementFive = () => {
    for(let i = 0; i < 5; i++) {
        // passing a function to setCount method  
        setCount(prevCount => prevCount + 1)
    }
  }
  
  
  return (
    <div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>

    </div>
  )
}

export default HookCounterTwo