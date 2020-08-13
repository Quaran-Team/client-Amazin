import React, { Component } from 'react'
import QAndADataService from '../service/QAndADataService'


export default class Answers extends Component {
    constructor(props){
        super(props)
        console.log("Hey! Props.")
        console.log(props)
    }

    state = {
        answers:[],
        allAnswers:[],
        sortedAnswers:[],
    }

    refreshAnswers = this.refreshAnswers.bind(this)
    
    componentDidMount() {
        this.refreshAnswers();
    }

    refreshAnswers() {
        QAndADataService.retrieveAllAnswers()
        .then(
            answers => {
                this.setState({ answers: answers.data })
                console.log("1")
                console.log(answers.data)
                console.log("2")
                console.log(this.state.allAnswers)
                console.log("3")
                console.log(this.state.answers)
                this.state.sortedAnswers = this.state.allAnswers.map((a) => a.questionid)
                console.log("Hello!")
                console.log(this.state.allAnswers)
            }
        )
    }

    render() {
        return (
            <div className="Answers">
                {this.state.answers.map((a) =>
                    <div>
                        <h4>Answer: </h4>
                        <p>{a.answer}</p>
                    </div>
                )}  
            </div>
        )
    }
}