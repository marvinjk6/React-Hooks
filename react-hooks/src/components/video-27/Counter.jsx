//Like useCallback - useMemo Hook is used for performance optimization

// now we need to indicate whether the count value is an odd number or an ecen number

import React, { useState, useMemo } from 'react'

function Counter() {

    const [counterOne, setCounterOne ] = useState(0)
    const [counterTwo, setCounterTwo ] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }  

    // this function cause delay in incrementOne wich is reponsible to increement counterOne, but also affects incrementTwo because every time the state updates the component rerender and isEven function is called again
    // we need to tell react to not calculate whether counterOne is odd or even, when we are changing counterTwo values

    //first parameter is the function that to calculate if a number is odd or even
    // the second parameter are the dependencies to watch for, the function only will execute when the dependency change
    // useMemo returns a cached value which we are going to assing to the variable isEven
    const isEven = useMemo(() => {
        let i = 0
        while(i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

  return (
    <div>

        <div>
            <button onClick={incrementOne}>Count 1: {counterOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>

        <br></br>

        <button onClick={incrementTwo}>Count 2: {counterTwo}</button>
    </div>
  )
}

export default Counter

/**
 * Difference:
 *      useCallback caches the provided function instance itself
 *      useMemo invokes the provided function and caches its RESULT
 * 
 *  if need to caches a function - useCallback
 *  if need to cache the result of an invoked function - useMemo
 */