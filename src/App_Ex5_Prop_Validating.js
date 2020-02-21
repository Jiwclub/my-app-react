import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {//การกำหนดค่าให้ properteis props
    
    render() {
        return (
            <div>
                {this.props.message} {this.props.count}
            </div>
        )
    }
}
App.prototypes = {
    message: PropTypes.string,
    count: PropTypes.number
}

// ฉีดแอปเข้าไปใน root component
App.defaultProps = {
    message: "codemobiles",
    count:1
}