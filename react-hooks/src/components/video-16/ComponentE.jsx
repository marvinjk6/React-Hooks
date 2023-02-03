
// import useContext
import React, { useContext } from 'react'
//import ComponentF from './ComponentF'

// import the contexts from App
import { UserContext, AnimeContext } from '../../App'

function ComponentE() {

  // pass the context as a parameter to useContext hook
  // assign to varibles and render them 
  const user = useContext(UserContext)
  const anime = useContext(AnimeContext)
 


  return (
    <div>
        {/* <ComponentF /> */}
        {user} - {anime} 
    </div>
  )
}

export default ComponentE