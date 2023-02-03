
import React, { useState, useEffect } from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'

function DocTitleTwo() {
 
  const [count, setCount ] = useState(0)

  useDocumentTitle(count)

  return (
    <div>
        <h3>{count}</h3>
        <button 
        onClick={()=>setCount(prevState=>prevState + 1 )}>Count</button>
    </div>
  )
}

export default DocTitleTwo