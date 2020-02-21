import React, { Component } from 'react'

export default class App extends Component {
    onClickBtn2 = ()=>{
        alert("Btn2 Test")
    }

    render() {
        return (
            <div>
               <button type="button" onClick={()=>alert("5555")} class="btn btn-primary">btn1</button>
               <button type="button" onClick={this.onClickBtn2}>btn2</button>
               <MyButton onSubmit={()=>(alert("My button"))}/> 
               {/* ส่ง props ของ Event แลัวนะ */}
               <button type="button" class="btn btn-outline-primary">Click</button>
               
               
            </div>
        )
    }
}



class MyButton extends Component {
// eslint-disable-next-line no-useless-constructor
constructor(props){
    super(props)
}

    render() {
        return (
            <div>
                 <button style={{backgroundColor: "#f00"}} 
                 type="button" onClick={this.props.onSubmit}>MyButton</button>
                 {/* ได้รับการส่ง props แล้วนะ */}
            </div>
        )
    }
}
