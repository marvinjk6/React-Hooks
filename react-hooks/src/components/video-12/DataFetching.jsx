
import axios from 'axios'
import React, { useState, useEffect } from 'react'

// in this part the goal is to fetch data using axios

function DataFetching() {

  const [users, setUsers] = useState([])  

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response)
        setUsers(response.data)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
        <h1>List of users</h1>
        <ul>
            {users.map(post => <li key={post.id}>{post.name}</li>)}
        </ul>
    </div>
  )
}

export default DataFetching