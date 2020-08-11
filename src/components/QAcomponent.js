import React, { Component } from 'react'
import QAitem from './QAitem'

class QAcomponent extends Component {
    render() {
        return (
            <div className="QAcomponent">
                <h1 id="title">Customer questions & answers</h1>
                <ol>
                    <QAitem
                    key={this.props.match.params.id}
                    params={this.props.match.params.id}
                    />
                </ol>
            </div>
        )
    }
}

export default QAcomponent;