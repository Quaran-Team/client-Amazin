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

    sortQuestions = (id) => {
        const filterQuestionsArray = this.state.response.filter(question => question.itemid == id)
        return (
            <div>
                {filterQuestionsArray.map(q =>
                    <div>
                    <h4>Question: </h4>
                    <p>{q.question}</p>
                    <div className="Answers">
                        {this.sortAnswers(q.id)}  
                    </div>
                    </div>
                )}   
            </div>
        )
    }

    sortAnswers = (id) => {
        const filterAnswersArray = this.state.allAnswers.filter(answer => answer.questionid == id)
        return (
            <div>
                {filterAnswersArray.map(a =>
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
                {this.sortQuestions(this.props.id)}
            </div>
        )
    }
}