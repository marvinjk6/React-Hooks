// import the context provide from App and useContext
import React, { useContext } from 'react'
import { CounterContext } from '../../App'

function ComponentA() {

  // pass CounterContext as argument for useContext hook
  const counterContext = useContext(CounterContext)

  // call the dispatch method of counterContext 
  return (
    <div>
        <h3>Component A: {counterContext.count}</h3>
        <button onClick={()=>counterContext.dispatch('increment')}>Increment</button>
        <button onClick={()=>counterContext.dispatch('decrement')}>Decrement</button>
        <button onClick={()=>counterContext.dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA

/***  IMPORTANT  **************
 the state is in App but we are able to share that state with different components nested at different levels in the component tree
*/