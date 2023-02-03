import React, { useReducer } from 'react'
import './App.css'
import ComponentA from './components/video-22/ComponentA'
import ComponentB from './components/video-22/ComponentB'
import ComponentC from './components/video-22/ComponentC'

// we want to pass count and dispatch method from App through componentA D and F

// 2º create and export the context, and wrap the components with context.Provider
export const CounterContext = React.createContext()

// 1º create the reducer and initial state of useReducer hook
const initialState = 0

  const reducer = (state, action) => {

    switch(action) {
      case 'increment':
        return state + 1

      case 'decrement':
        return state - 1

      case 'reset':
        return initialState

      default:
        return state 
    }
  }

function App() {

  // the current state, method to dispatch an action
  const [count, dispatch] = useReducer(reducer, initialState)

  // in the value atribbute pass in an object with the state and dispatch
  return (
    <div className="App">
      <CounterContext.Provider value={{count, dispatch}}>
        <div>Count: {count}</div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider>
    </div>
  )
}

export default App
