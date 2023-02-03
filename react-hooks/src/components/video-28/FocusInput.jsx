

// useRef-Hook this hook makes possible to acess DOM node directly within functional components, a commom use is when a web page is loaded we want that the input be focused
import React, { useEffect, useRef } from 'react'

function FocusInput() {

  const inputRef = useRef(null)
  
  useEffect(()=>{
    // focus the input element
    // current -> react will set the refs current property to the corresponding DOM node
    inputRef.current.focus()
  }, [])

  // attach the variable to the input, use the reserved atribbute ref
  return (
    <div>
        <label>Username: </label>
        <input ref={inputRef} type="text"/>
    </div>
  )
}

export default FocusInput