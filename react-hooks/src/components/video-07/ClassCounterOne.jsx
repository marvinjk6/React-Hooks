

import React, { Component } from 'react'

class ClassCounterOne extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }  

  componentDidMount() {
    // title is the HTML tag <title> that stay on the head of a HTML document
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.setState({ count: this.state.count + 1 })}>
            Clicked {this.state.count} times
        </button>
      </div>
    )
  }
}

export default ClassCounterOne