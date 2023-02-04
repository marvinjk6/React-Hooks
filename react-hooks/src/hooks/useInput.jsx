// our custom hook has to sort of encapsulate the controlled component behaviour for an input element
import { useState } from 'react'

function useInput(initialValue) {
  
    const [value, setValue] = useState(initialValue)  

    // method to reset the value
    const reset = () => {
        setValue(initialValue)
    }

    const bind = {
        value,
        onChange: e => {
           setValue(e.target.value) 
        }
    }

    return [value, bind, reset]

}

export default useInput