import React from 'react'
import useInput from '../../hooks/useInput'

function UserForm() {

  // destructure the values that UseInput returns
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')


  // bind replace value and onChange, we can see in UseInput that bind has value and Onchange we must use the spread operator

  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Welcome ${firstName} ${lastName}`)
    // here we reset the values
    resetFirstName()
    resetLastName()
  }
  
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First name: </label>
                <input
                type="text"
                {...bindFirstName} />
            </div>

            <div>
                <label>Last name: </label>
                <input
                type="text"
                {...bindLastName} />
            </div>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default UserForm