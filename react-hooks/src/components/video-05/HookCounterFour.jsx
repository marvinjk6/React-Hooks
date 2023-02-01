

import React, { useState } from 'react'

// now we're going to see how to use the state hook when the state variable is an array, is very similar with objects, the useState does not automatically merge (fundir) and update the array, is necessary to use the spread operator 

function HookCounterFour() {

  const  [items, setItems] = useState([])

  const addItem = () => {
    setItems([...items, {
        id: items.length, 
        value: Math.floor(Math.random() * 100) + 1
    }])
  }

  return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
          {items.map(item => <li key={item.id}>{item.value}</li>)}  
        </ul>
    </div>
  )
}

export default HookCounterFour