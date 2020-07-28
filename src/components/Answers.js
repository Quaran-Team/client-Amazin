import React, { Component } from 'react'
import SingleAnswer from './SingleAnswer'

export default class Answers extends Component {
    render() {
        return (
            <div className="Answers">
                <h4>Answer: </h4>
                <ol>
                    <SingleAnswer/>
                </ol>
            </div>
        )
    }
}