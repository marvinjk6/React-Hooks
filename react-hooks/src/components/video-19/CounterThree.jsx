import React, { useReducer } from 'react'


const initialState = 0

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const RESET = 'reset'

const reducer = (state, action) => {

    switch (action) {
        case INCREMENT:
            return state + 1
    
        case DECREMENT:
            return state - 1
    
        case RESET:
            return initialState
        
        default:
            return state
    }
}

function CounterThree() {

    // now we're going to add another counter, and add another useReducer
    const [counter, dispatch] = useReducer(reducer, initialState)
    const [counterTwo, dispatchTwo] = useReducer(reducer, initialState)
    
  return (
    <div>
        <div>Counter One: {counter}</div>
        <button onClick={()=>dispatch(INCREMENT)}>Increment</button>
        <button onClick={()=>dispatch(DECREMENT)}>Decrement</button>
        <button onClick={()=>dispatch(RESET)}>Reset</button>
        <div>Count Two: {counterTwo}</div>
        <button onClick={()=>dispatchTwo(INCREMENT)}>Increment</button>
        <button onClick={()=>dispatchTwo(DECREMENT)}>Decrement</button>
        <button onClick={()=>dispatchTwo(RESET)}>Reset</button>
    </div>
  )
}

export default CounterThree

