import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {
constructor(props) {
    super(props)

    this.state = {
         count1: 0,
         count2:0,
    }
}


    render() {
        // ถอดค่าที่มีใน state
        const {count1, count2} = this.state 

        return (
            <div>
                <button onClick={()=>this.setState({count1: count1+1})} type="button" class="btn btn-outline-primary">SetState V1 {count1}</button>
                {/* ดึงค่าจาก state ก่อนหน้า */}
                <button onClick={()=>this.setState(prevState=>{return{count2: prevState.count1 + prevState.count2}})} type="button" class="btn btn-outline-primary">SetState V2 {count2}</button>
                {/* รีเฟรช Component */}
                <button onClick={()=>{this.forceUpdate()}} type="button" class="btn btn-outline-primary"> forceUpdate {Math.random()}</button>
                {/* ตัวเมทธอด findDOMNode  //  โจทย์ต้องการเปลี่ยนแปลงค่าของ tag id="" */}
                <button onClick={()=>{
                     var myDiv = document.getElementById('comment')
                     
                     ReactDOM.findDOMNode(myDiv).style.color = 'red';
                }}

                 type="button" class="btn btn-outline-primary"> findDomNode</button>

                <div id="comment">Code mobiles</div>
            </div>
        )
    }
}
