import React, { Component } from 'react'
import SingleAnswer from './SingleAnswer'
import QAndADataService from '../service/QAndADataService'


export default class Answers extends Component {
    constructor(props){
        super(props)
        console.log("Hey! Props.")
        console.log(props)
    }

    state = {
        response:[],
        allAnswers:[],
        sortedAnswers:[]
    }

    refreshAnswers = this.refreshAnswers.bind(this)
    
    componentDidMount() {
        this.refreshAnswers();
    }

    refreshAnswers() {
        QAndADataService.retrieveAllAnswers()
        .then(
            response => {
                this.setState({ response: response.data })
                console.log(response.data)
                this.state.allAnswers = this.state.response.map((a) => a.questionid)
                // console.log("Hello!")
                // console.log(this.state.allAnswers)
            }
        )
    }

    render() {
        return (
            <div className="Answers">
                {this.state.response.map((a) =>
                <div>
                    <h4>Answer: </h4>
                    <p>{a.answer}</p>
                </div>
                )}  
            </div>
        )
    }
}