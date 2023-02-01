

import React, { Component } from 'react'

class ClassCounterOne extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       name: ""
    }
  }  

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  // here the goal is after the input is filled and the button is clicked we don't want the state name still update for a better performance
  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
        document.title = `Clicked ${this.state.count} times`
        console.log('Updated document title')
    }
  }

  render() {

    const {count, name} = this.state

    return (
      <div>
        <h2>Class Component</h2>
        <div>
            <label>Name: </label>
            <input 
            type="text" 
            value={name} 
            onChange={e => this.setState({name: e.target.value})}/>
        </div>
        <button className='button' onClick={()=>this.setState({ count: count + 1 })}>
            Clicked {this.state.count} times
        </button>
      </div>
    )
  }
}

export default ClassCounterOne