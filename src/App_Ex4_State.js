import React, { Component } from 'react'

export default class App extends Component {
    // State full คือ state ที่เปลี่ยนแปลงค่าได้
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            message:"Reset"
        }
    }
    render() {
        return (
            <div>
                <button  onClick={()=>{this.setState({count: this.state.count+1})}}
                type="button" class="btn btn-outline-primary">Count:{this.state.count}</button>
                <button onClick={()=>{this.setState({count:0, message:"Clear"})}} type="button"  class="btn btn-primary" >{this.state.message}</button>
            </div>
        )
    }
}
