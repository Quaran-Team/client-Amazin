import React, { Component } from 'react'
import QAitem from './QAitem'

class QAcomponent extends Component {
    render() {
        return (
            <div className="QAcomponent">
                <h1 id="title">Customer questions & answers</h1>
                <ol>
                    <QAitem/>
                </ol>
            </div>
        )
    }
}

export default QAcomponent;