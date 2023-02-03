import React, { useState, useEffect } from 'react'
import axios from 'axios'

// IMPORTANT
// first we're going to fetch using setState
// we declared three state variables and depending on the API returning a successful reposnse or an error we apply the apropriate state transition

function DataFetchingOne() {
  
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
    .then(res => {
        setLoading(false)
        setPost(res.data)
        setError('')
    })
    .catch(error => {
        setLoading(false)
        setPost({})
        setError('Seomething went wrong!!')
    })
  }, [])

  return (
    <div>
        {loading ? 'Loading...' : post.title }
        {error ? error : null}
    </div>
  )
}

export default DataFetchingOne