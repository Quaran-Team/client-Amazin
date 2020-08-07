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
    // sortAnswers = this.sortAnswers.bind(this)
    
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
                console.log(allAnswers.data)
            }
        )
    }

    sortAnswers() {
        console.log(this.state.allAnswers.length)
        for(let i = 0; i < this.state.allAnswers.length; i++) {
                if(this.state.allAnswers[i].questionid == this.state.response.id) {
                    this.state.sortedAnswers.push(this.state.allAnswers[i])
                } else {
                    console.log("Nope")
            }
        }
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
                        {/* {this.sortAnswers()} */}
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