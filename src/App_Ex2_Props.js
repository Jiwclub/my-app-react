import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (           //การส่งค่าจาก component แม่ ไปยัง component ลูก
            <div>
                <Entry label="UserName" type="text" hint="e-mall"/>
                <Entry label="PassWord" type="password" hint="min 8 letter"/>
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
        return (            //component ลูก
            <div>
                <span>{this.props.label}: </span>
                <input type={this.props.type} name="" id="input" 
                class="btn btn-primary" placeholder= {this.props.hint} />
            </div>
        )
    }
}

