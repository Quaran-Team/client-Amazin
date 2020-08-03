import React, { Component } from 'react'
import Answers from './Answers'
import QAndADataService from '../service/QAndADataService'


export default class QAitem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            response:null,
        }
        this.refreshQAndA = this.refreshQAndA.bind(this)
    }

    componentDidMount() {
        this.refreshQAndA();
    }

    refreshQAndA() {
        QAndADataService.retrieveAllQAndAs()
        .then(
            response => {
                this.setState({ response: response.data })
            }
        )
    }

    render() {
        return (
            <div className="QAitem">
                <h2>Question: </h2>
                <h2><Answers/></h2>
            </div>
        )
    }
}