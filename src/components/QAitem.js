import React, { Component } from "react";
import QAndADataService from "../service/QAndADataService";
import Votes from "./Votes"
import "./qacomponent.css";

export default class QAitem extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleChangeAdd = this.handleChangeAdd.bind(this);
    // this.handleChangeSubtract = this.handleChangeSubtract.bind(this);

  }

  state = {
    response: [],
    allAnswers: [],
    sortedAnswers: [],
    itemId: null,
    // input: 0,
  };

<<<<<<< HEAD
  refreshQAndA = this.refreshQAndA.bind(this);
  refreshAnswers = this.refreshAnswers.bind(this);
=======
    constructor(props) {
        super(props)
    }
    
    state = {
        response:[],
        allAnswers:[],
        sortedAnswers:[],
        itemId: null,
    }
>>>>>>> 5aabebd86394bd9fe6bd7fc995fceba79fb8e709

  componentDidMount() {
    this.refreshQAndA();
    this.refreshAnswers();
  }

<<<<<<< HEAD
//   handleChangeAdd(e) {
//     let votes = parseInt(e)
//     this.setState({ input: votes + 1 });
//   }

//   handleChangeSubtract(e) {
//     let votes = parseInt(e)
//     this.setState({ input: votes - 1 });
//   }

  refreshQAndA() {
    QAndADataService.retrieveAllQAndAs().then((response) => {
      this.setState({ response: response.data });
    });
  }

  refreshAnswers() {
    QAndADataService.retrieveAllAnswers().then((allAnswers) => {
      this.setState({ allAnswers: allAnswers.data });
    });
  }

  sortQuestions = (id) => {
    const filterQuestionsArray = this.state.response.filter(
      (question) => question.itemid == id
    );
    return (
      <div>
        {filterQuestionsArray.map((q) => (
          <div className="section">
            <Votes/>
            <div className="qAndA">
              <div className="question">
                <h4>Question: </h4>
                <p id="individual">{q.question}</p>
              </div>
              <div>{this.sortAnswers(q.id)}</div>
=======
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
>>>>>>> 5aabebd86394bd9fe6bd7fc995fceba79fb8e709
            </div>
          </div>
        ))}
      </div>
    );
  };

  sortAnswers = (id) => {
    const filterAnswersArray = this.state.allAnswers.filter(
      (answer) => answer.questionid == id
    );
    return (
      <div>
        {filterAnswersArray.map((a) => (
          <div className="section">
            <h4>Answer: </h4>
            <p id="individual" className="answer">
              {a.answer}
            </p>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return <div className="QAitem">{this.sortQuestions(this.props.id)}</div>;
  }
}
