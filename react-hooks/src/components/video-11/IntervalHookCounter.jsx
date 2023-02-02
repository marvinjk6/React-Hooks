

import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
 
  const [count, setCount] = useState(0)

  // this way to update
  function tick() {
    setCount(prevState => prevState + 1)
  }

  useEffect(()=>{
    const interval = setInterval(tick, 500)
    return () => {
        clearInterval(interval)
    }
  }, [])
    // we could put count in the array, the fuction tick would be like this
    /**
     *  function tick() {
            setCount(count + 1)
    '   }
     */
    
  return <h1>{count}</h1>
}

export default IntervalHookCounter

// whenever is need to call a function within useEffect, just define the function with the noose effect and pass the prop which has to be specified as a dependency

// SPECIFYING MULTIPLES EFFECTS - it is possible to include multiple useEffect calls within the same component