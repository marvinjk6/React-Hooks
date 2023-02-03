// we're going to create a custom hook that basically updates the document title 
// in this component we're going to create a counter an set the document title without using any custom hook 

import React, { useState } from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'

function DocTitleOne() {

  // 1º create a new state variable  
  const [count, setCount ] = useState(0)

  //call a function which is the custom hook we created, pass the initial state 0 assigned to the variable count
  useDocumentTitle(count)

  return (
    <div>
        <h3>{count}</h3>
        <button 
        onClick={()=>setCount(prevState=>prevState + 1 )}>Count</button>
    </div>
  )
}

export default DocTitleOne