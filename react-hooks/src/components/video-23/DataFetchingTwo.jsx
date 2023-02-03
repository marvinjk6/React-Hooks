
// Important
// Now we're going to use useReducer to manage the state

// 1º make the necessary imports 
import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

// 2º create the initialState for the useReducer hook, this time initialState is an object wich its properties are the same state variables using in DataFetchingOne

const initialState = {
    loading: true,
    post: {},
    error: ''
}

// 3º create the reducer function for useReducer hook 
const reducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong!!'
            }
        default:
            return state    
    } 
      
}

function DataFetchingTwo() {
    
    // 4º invoke the useEffect and useReducer to fetch the data and set the state 
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            // if the request is successful we dispatch success action
            dispatch({type: 'FETCH_SUCCESS', payload: res.data})})
            // If there was any error dispatch error action
        .catch(err => {
             dispatch({type: 'FETCH_ERROR'})
        })
    }, [])

  // final step specify the JSX  
  return (
    <div>
        {state.loading ? 'loading...' : state.post.title}
        {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingTwo