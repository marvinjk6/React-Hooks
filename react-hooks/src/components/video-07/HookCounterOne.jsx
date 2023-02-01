import React, { useState, useEffect } from 'react'

function HookCounterOne() {

  const [count, setCount] = useState(0) 
  const [name, setName] = useState('')

  // for conditionally execute an effect we pass in a second parameter, an array, in the array we need to specify either props or state that we need to watch for, only if those props and states especified in this array change the effect would be executed
  // here we want the effect to execute only when the count value changes
   useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
   }, [count]) 

  return (
    <div>
        <h2>Hooks</h2>
        <div>
            <label>Name: </label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <button className='button' onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default HookCounterOne