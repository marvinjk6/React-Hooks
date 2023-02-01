import React from 'react'

// useSatet is a hook that lets add react state to functional component
import { useState } from 'react'

// HOOK is just a special function that lets you hook into react features
 
function HookCounter() {

  // 1º step: state property initialized to zero
  // count: current value of the state variable 
  // setCount: method that can update the state
  const [count, setCount] = useState(0)

  // 2º step: we need a method capable of setting that state property value
  function incrementCount() {
    // current count + 1
    setCount(count + 1)
    console.log(count)
  }


  return (
    <div>
        <h2>Using Hooks</h2>
        <h3>{count}</h3>
        <button onClick={incrementCount}>click</button>
    </div>
  )
}

export default HookCounter
