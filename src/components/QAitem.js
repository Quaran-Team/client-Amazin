import React, { Component } from 'react'
import Answers from './Answers'
import QAndADataService from '../service/QAndADataService'


export default class QAitem extends Component {

    constructor(props) {
        super(props)
        
    }
    
    state = {
        response:[]
    }

    refreshQAndA = this.refreshQAndA.bind(this)
    
    componentDidMount() {
        this.refreshQAndA();
    }

    refreshQAndA() {
        QAndADataService.retrieveAllQAndAs()
        .then(
            response => {
                this.setState({ response: response.data })
                console.log(response.data)
            }
        )
    }

    render() {
        return (
            <div className="QAitem">
                {this.state.response.map((q) => 
                <div>
                    <h2>Question: </h2>
                    <p>{q.question}</p>
                    <h2><Answers key={q.id} /></h2>
                </div>
                )}
            </div>
        )
    }
}