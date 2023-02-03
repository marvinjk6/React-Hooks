
// 1º import useReducer
import React, { useReducer } from 'react'

// 2º define initialState and the reducer function

//define initialState and the reducer outside of the component
const initialState = 0

// action is kind of instruction to the reducer function, based on what the action specifies the reducer function performs the necessary state transition, in our case 3 actions => increment, decrement, reset

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

function ConterOne() {

    // first parameter is a reducer
    // second parameter the initial state
    // 3º we need to get hold of a value to display in the JSX, and we need a way to call the reducer function with the aproprieta action. useReducer returns a pair of values  which we can get hold using the array destructuring like in useState

    //[currentValue, method to dispatch action]
    const [count, dispatch] = useReducer(reducer, initialState)
    
  return (
    <div>
        <div>Count: {count}</div>
        <button onClick={()=>dispatch(INCREMENT)}>Increment</button>
        <button onClick={()=>dispatch(DECREMENT)}>Decrement</button>
        <button onClick={()=>dispatch(RESET)}>Reset</button>
    </div>
  )
}

export default ConterOne