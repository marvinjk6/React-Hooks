import React, { useContext } from 'react'
import { CounterContext } from '../../App'
 
function ComponentF() {

  const counterContext = useContext(CounterContext)

  return (
    <div>
      <h3>Component F: {counterContext.count}</h3>  
        <button onClick={()=>counterContext.dispatch('increment')}>Increment</button>
        <button onClick={()=>counterContext.dispatch('decrement')}>Decrement</button>
        <button onClick={()=>counterContext.dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentF
