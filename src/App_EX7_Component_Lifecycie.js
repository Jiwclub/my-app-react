import React, { Component } from 'react'

export default class App extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor (props) {
        super(props)
        this.state = { data: 0};
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({data: this.state.data + 1})}>INCREMENT</button>
                {/* ส่งค่า props แล้วนะ */}
                <Content myNumber={this.state.data}/>
            </div>
        )
    }
}



class Content extends Component {
    
    constructor (props) {
        super(props)
        console.log("Component Constructing!") 
    }
    componentWillMount() {
        // จะถูกเรียกในตอนจังหวะที่ component ถูกสร้างขึ้นมา หรือกำลังจะแสดง
        console.log("Component WILL MOUNT!") 
    }
    componentDidMount() {
        // จะถูกเรียกตอนที่ component หรือ user interface ถูกแสดงผลเรียบร้อยแล้ว
        console.log("Component DID MOUNT!")
    }
    componentWillReceiveProps(newProps) {
        // การเปลี่ยนเปลี่ยงค่า properties
        console.log("Component WILL RECEIVEPROPS PROPS!")
    }
    shoucomponentWillUpdate(newProps,newState) {
        return true;
    }
    componentWillUpdate(nextProps,nextState) {
        // กำลังจะถูก อัปเดต
        console.log("Component WILL UPDATE!")
    }
    componentDidUpdate(){
        // อัปเดตแล้ว
        console.log("Ccomponent DID UPDATE")
    }
    componentWillUnmount() {
        // กำลังโดนทำลาย
        console.log("Component WILL UNMOUNT")
    }
    
    render() {
        return (
            <div>
                {/* รับค่า props แลัวนะ */}
                <h3>{this.props.myNumber}</h3>
            </div>
        )
    }
}





