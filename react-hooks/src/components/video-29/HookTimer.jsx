import React, { useEffect, useState, useRef } from 'react'

// we cant clear the interval out of the useEffect, this is where useRef comes to rescue, although userRef can hold a reference to a DOM node using the ref atributte it can be also used to store any mutable value

// useRef can be used to create a generic container which can hold a mutable value, this generic container does not rerenders when the data it stores changes

function HookTimer() {

  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()
  
  useEffect(()=>{
    intervalRef.current = setInterval(()=>{
        setTimer(prevState => prevState + 1)
    },1000)

    return () => {
        clearInterval(intervalRef.current)
    }
  }, [])
  
  return (
    <div>
        <div>
            <h3>Hook Timer</h3>
            {timer}
        </div>
        <button onClick={()=> clearInterval(intervalRef.current)}>clear hook timer</button>
    </div>
  )
}

export default HookTimer