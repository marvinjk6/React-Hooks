import React from 'react'

function Button({handleClick, children}) {

  // children is the content in the parent
console.log(`Rendering ${children}`)  
    
  return (
    <div>
        <button onClick={handleClick}>
            {children}
        </button>
    </div>
  )
}

// pass in the Button component as a parameter to React.memo
export default React.memo(Button)