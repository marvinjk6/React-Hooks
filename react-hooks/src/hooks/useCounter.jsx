import { useState } from 'react'

// we can customize the initial state, and the value tht will decrements or increments
function useCounter(initialCount = 0, value) {

  const [count, setCount] = useState(initialCount) 

  const increment = () => {
    setCount(prevState => prevState + value)
  }

  const decrement = () => {
    setCount(prevState => prevState - value)
  }

  const reset = () => {
    setCount(initialCount)
  }

  // the custom hook return an array with the state and the methods to change it using array destructuring
  return [count, increment, decrement, reset]
}

export default useCounter