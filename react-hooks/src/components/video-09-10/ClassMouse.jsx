

import React, { Component } from 'react'

 class ClassMouse extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       x: 0,
       y: 0
    }
  }  

  logMousePosition = e => {
    this.setState({ x: e.clientX, y: e.clientY })
  }

  // we set the event only once with componentDidMount lifecycle
  componentDidMount() {
    window.addEventListener('mousemove', this.logMousePosition)
  }

  // to remove the event when the component disappear in class component
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.logMousePosition)
  }

  render() {
    return (
      <div>
        X - {this.state.x} Y - {this.state.y}
      </div>
    )
  }
}

export default ClassMouse