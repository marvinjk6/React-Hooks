import React from 'react'

function Title() {
  console.log('Rendering Title')
  return (
    <h2>useCallback hook</h2>
  )
}

// pass in the Title component as a parameter to React.memo
export default React.memo(Title)