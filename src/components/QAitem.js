import React, { Component } from 'react'
import Answers from './Answers'
import QAndADataService from '../service/QAndADataService'


export default class QAitem extends Component {

    constructor(props) {
        super(props)
        console.log(props, "PROPS!")
    }
    
    state = {
        response:[],
        allAnswers:[],
        sortedAnswers:[],
        itemId: null,
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
                // console.log(response.data)
            }
        )
    }

    refreshAnswers() {
        QAndADataService.retrieveAllAnswers()
        .then(
            allAnswers => {
                this.setState({ allAnswers: allAnswers.data })
                // console.log(allAnswers.data)
            }
        )
    }

    sortAnswers = (id) => {
        const filterArray = this.state.allAnswers.filter(answer => answer.questionid == id)
        console.log(filterArray)
        console.log("HERE")
        return (
            <div>
                {filterArray.map(a =>
                    <div>
                    <h4>Answer: </h4>
                    <p>{a.answer}</p>
                    </div>
                )}   
            </div>
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
                        {this.sortAnswers(q.id)}  
                    </div>
                </div>
                )}
            </div>
        )
    }
}