

import React, { Component } from 'react'

class ClassCounter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
    this.incrementCount = this.incrementCount.bind(this)
  } 
  
  incrementCount() {
    this.setState(prevState => {
        return { count: prevState.count + 1 }
    })
    console.log(this.state)
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h2>Using Class Component</h2>
        <h3>{count}</h3>
        <button onClick={this.incrementCount}>click</button>
      </div>
    )
  }
}

export default ClassCounter