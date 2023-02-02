
import axios from 'axios'
import React, { useState, useEffect } from 'react'

// now in jsonplaceholder site we see that in the url /posts/1 and posts/2 there is just one 1 post, we want to retrieve this post (recuperar) 
//1º create an input that will accept a post ID from the user

function DataFetching() {

  // 2º the initial state of post now is an empty object, because each post is an object
  const [post, setPost] = useState({})  
  const [id, setId] = useState(1)
  
  // 3º we need to change to template string so we can append /id on the url
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {
        console.log(response)
        setPost(response.data)
    })
    .catch(error => console.log(error))
  // to update id when change a number of the input we need to pass id as a dependency 
  }, [id])

  return (
    <div>
        {/** the value the input is the same of id, by default 1 but we can change to 30 for example and the post is updated */}
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <div>{post.title}</div>
    </div>
  )
}


export default DataFetching