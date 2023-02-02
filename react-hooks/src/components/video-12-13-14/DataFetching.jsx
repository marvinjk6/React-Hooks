
import axios from 'axios'
import React, { useState, useEffect } from 'react'

// now in jsonplaceholder site we see that in the url /posts/1 and posts/2 there is just one 1 post, we want to retrieve this post (recuperar) 

// now we're going to see how to trigger the effect on a button click, we create a button and add a click handler, within the click handler we can made the get request. But we can do the same with the useEffect hook


function DataFetching() {

  const [post, setPost] = useState({})  
  const [id, setId] = useState(1)
  // 1º create a variable state to change based on the click button
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  function handleClick() {
    setIdFromButtonClick(id)
  }

  //useEffect now has as dependency idFromButtonClick
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(response => {
        setPost(response.data)
    })
    .catch(error => console.log(error))
  }, [idFromButtonClick])

  // when click the button we want to change the state of idFromButtonClick
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type="button" onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
    </div>
  )
}


export default DataFetching