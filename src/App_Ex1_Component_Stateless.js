import React, { Component } from 'react'

export default class App extends Component { //export default จะทำให้ไฟล์อื่น import ไปใช้งานได้ 
                                            // ComponentStateless output ที่ได้ขึ้นอยู่กับที่กรอกไม่มีการเปลี่ยนแปลงค่า
    render() {
        return (
            <div>
                12234
                <Header/>
                <Content/>
            </div>
        )
    }
}



 class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        )
    }
}



class Content extends Component {
    render() {
        return (
            <div>
                <h1>content</h1>
            </div>
        )
    }
}
