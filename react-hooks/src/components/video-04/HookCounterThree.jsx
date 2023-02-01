

import React from 'react'
import { useState } from 'react'

function HookCounterThree() {

  // A state variable can be a string, a number, boolean, object and an array
  // in this lesson we're going to see the variable as an object

  // when we write firstName in the input  lastName disappears, when we write lastName firstName disappears.
  //this happens because useState does not automatically merge and update the Object, we have to do it manually using Spread operator in the setmethod before update the state

  // first make a copy of the object and its properties ...object and then update the property desired 

  const [name, setName] = useState({firstName: "", lastName: ""})

  return (
    <form>
        <div>
            <label>First name: </label>
            <input type="text" valeu={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })}/>
        </div>

        <div>
            <label>Last name: </label>
            <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })}/>
        </div>

        <h2>Your first name is: {name.firstName}</h2>
        <h2>Your last name is: {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default HookCounterThree