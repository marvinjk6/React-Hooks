import React from 'react'

function Count(props) {
  const {text, count} = props 
  console.log(`Rendering ${text}`)  

  return <div>{text} - {count}</div> 
}

// pass in the Count component as a parameter to React.memo
export default React.memo(Count)