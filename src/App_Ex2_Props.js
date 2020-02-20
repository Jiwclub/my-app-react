import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <Entry label="UserName" type="text"/>
                <Entry label="PassWord" type="password"/>
            </div>
        )
    }
}



class Entry extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <span>{this.props.label}: </span>
                <input type={this.props.type} name="" id="input" class="btn btn-primary"  />
            </div>
        )
    }
}

