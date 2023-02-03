// 1º import useCallback Hook
import React, { useState, useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
  
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(5000)

  // the callback hook has 2 parameter
  // first a function that changes the state
  // second a dependecy variable to watch if there's any change
  const incrementAge = useCallback(() => {
    setAge(prevState => prevState + 1)
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(prevState => prevState + 1)
  }, [salary])

  return (
    <div>
        <Title />
        <Count text="Age" count={age}/>
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text="Salary" count={salary} />
        <Button handleClick={incrementSalary}>Increment salary</Button>
    </div>
  )
}

export default ParentComponent

// the Parent component does five things: displays a title, displays a persons age, providesa button to increment the age, displays a salary and provides a button to increment the salary. The code was written in this way so that we understand about performance optimization, and useCallback Hook

// in the console when a button is clicked all the five components in the parent component are beig rendering, this is bad for performance

// what we want is when click on the button related to age, just the age state should rendering, and the same to to button related with salary

// to solve this problem of all componets rerendering we will use React.memo


// When we use React.memo() when click the button to increase age this button rerender, the age state rerender and the button to increase salary also rerender too, the same happens when click in the increase salary button. This happens because a new increment salary function is created each time the parent component renders.

// how to tell react that there is no need to create a new increment salary function when we update the age?
// the answer is useCallback hook

//Link to when use useMemo and whe use useCallback - https://kentcdodds.com/blog/usememo-and-usecallback
