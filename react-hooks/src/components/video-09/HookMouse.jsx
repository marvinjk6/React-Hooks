

import React from 'react'
import { useState, useEffect } from 'react'

function HookMouse() {
 
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)  

  //clientX and clientY are properties of MouseEvent
  const logMousePosition = e => {
    console.log('mousemove executed')
    //console.log(e)
    setX(e.clientX)
    setY(e.clientY)
  }

  // now we need to add an event listener for the mouse event
  // we want to add an event only once, so we pass an empty array as second argument to useEffect and it won't going to add the event every single time  
  useEffect(()=>{
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)
  }, [])

  return (
    <div>
        Hooks: X - {x} - Y {y}
    </div>
  )
}

export default HookMouse
