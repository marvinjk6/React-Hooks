import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const RESET = 'reset'

const INCREMENT2 = 'increment2'
const DECREMENT2 = 'decrement2'

const reducer = (state, action) => {

    switch (action.type) {

        case INCREMENT:
            return { ...state, firstCounter: state.firstCounter + action.value }
    
        case DECREMENT:
            return { firstCounter: state.firstCounter - action.value }

        case INCREMENT2:
            return { secondCounter: state.secondCounter + action.value }
    
        case DECREMENT2:
            return { secondCounter: state.secondCounter - action.value }
    
        case RESET:
            return initialState
        
        default:
            return state
    }
}

function CounterTwo() {

    const [counter, dispatch] = useReducer(reducer, initialState)  

  return (
    <div>
        <div>First Counter: {counter.firstCounter}</div>
        <div>Second Counter: {counter.secondCounter}</div>
        <button onClick={()=>dispatch({type: INCREMENT, value: 1})}>Increment Counter 1</button>
        <button onClick={()=>dispatch({type: DECREMENT, value: 5})}>Decrement by 5 Counter 1</button>
        <button onClick={()=>dispatch({type: INCREMENT2, value: 1})}>Increment Counter 2</button>
        <button onClick={()=>dispatch({type: DECREMENT2, value: 5})}>Decrement by 5 Counter 2</button>
        <button onClick={()=>dispatch({type: RESET})}>Reset</button>
    </div>
  )
}

export default CounterTwo

// now state and action are objects
// we pass the property type of action as a paremeter for dispatch

/**** IMPORTANT **********/
// when using this pattern?  

// ACTION as object allow us to pass additional data to the reducer function
// first scenario: related when the action is an object

// the first scenario is concerning (sobre, relativo) the value by which we need to increment or decrement the counter, what if we wanted to add two more buttons that could increent or decrement the value by 5, that's simple if our action is an object, we can add a second propertie called value for example, and in the reducer pass action.value

//STATE as object allows us to have multiple state variables
// second scenarios: related when the state is an object
// suppose you wanted to maintaing two different counters, simple add another property to initialState like secondCounter, when the initialState has more than one property we need to use spread operator to prevent one property from interfering with the other when changing its state