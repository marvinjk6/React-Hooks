import React from 'react'
import { UserContext, AnimeContext } from '../../App'

// this was the way before useContext, it's not necessary to use anymore

function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
          {
            user => {
              return (
                <AnimeContext.Consumer>
                  {
                    anime => {
                      return <div>user context value = {user}, anime context value = {anime}</div>
                    }
                  }
                </AnimeContext.Consumer>
              )
            }
          }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF