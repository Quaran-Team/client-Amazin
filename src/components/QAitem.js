import React, { Component } from 'react'
import Answers from './Answers'
import QAndADataService from '../service/QAndADataService'


export default class QAitem extends Component {

    constructor(props) {
        super(props)
        
    }
    
    state = {
        response:[],
        allAnswers:[],
        sortedAnswers:[],
    }

    refreshQAndA = this.refreshQAndA.bind(this)
    refreshAnswers = this.refreshAnswers.bind(this)
    
    componentDidMount() {
        this.refreshQAndA();
        this.refreshAnswers();
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

    refreshAnswers() {
        QAndADataService.retrieveAllAnswers()
        .then(
            allAnswers => {
                this.setState({ allAnswers: allAnswers.data })
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
                    {/* <h2><Answers key={q.id} /></h2> */}
                    <div className="Answers">
                        {this.state.allAnswers.map((a) =>
                            <div>
                                <h4>Answer: </h4>
                                <p>{a.answer}</p>
                            </div>
                        )}  
                    </div>
                </div>
                )}
            </div>
        )
    }
}