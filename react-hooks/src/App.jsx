import React from 'react'
import './App.css'
import ComponentC from './components/video-16/ComponentC'

 // 1º create the context, 3º export the context
 export const UserContext = React.createContext()
 export const AnimeContext = React.createContext()

function App() {

  // 2º wrap the componet with the Provider, and provide a value which is the props that will be shared between components
  return (
    <div className="App">
      <UserContext.Provider value={"Marvin"}>
        <AnimeContext.Provider value={"HunterxHunter"}>
          <ComponentC  />
        </AnimeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
