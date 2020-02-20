import React, { Component } from 'react'

export default class App extends Component {
  render() {
    let count = 0
    function plus(){
      count++
    }
    return (
      <div>
        <h1>Code Testing {plus()}</h1>
    <span>{count}</span>
      </div>
    )
  }
}
