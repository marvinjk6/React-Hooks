
// like in the ClassCounterOne compent the goal is to change the document title on button  
// useEffect is used to create side effects like interact with the DOM or fetching data
// we call useEffect within the component

import React, { useState, useEffect } from 'react'

function HookCounterOne() {

  const [count, setCount] = useState(0) 

  //the firts paremeter is a function that is executed after every render of the component 
   useEffect(() => {
        document.title = `You clicked ${count} times`
   }) 

  return (
    <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default HookCounterOne