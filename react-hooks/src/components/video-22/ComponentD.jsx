

import React, { useContext } from 'react'
import { CounterContext } from '../../App'


function ComponentD() {

  const counterContext = useContext(CounterContext)

  return (
    <div>
      <h3>Component D: {counterContext.count}</h3>
        <button onClick={()=>counterContext.dispatch('increment')}>Increment</button>
        <button onClick={()=>counterContext.dispatch('decrement')}>Decrement</button>
        <button onClick={()=>counterContext.dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentD