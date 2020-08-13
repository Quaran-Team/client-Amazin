import React, { Component } from "react";
import QAndADataService from "../service/QAndADataService";
import "./qacomponent.css";

export default class QAitem extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.handleChangeAdd = this.handleChangeAdd.bind(this);
    this.handleChangeSubtract = this.handleChangeSubtract.bind(this);

  }

  state = {
    response: [],
    allAnswers: [],
    sortedAnswers: [],
    itemId: null,
    input: 0,
  };

  refreshQAndA = this.refreshQAndA.bind(this);
  refreshAnswers = this.refreshAnswers.bind(this);

  componentDidMount() {
    this.refreshQAndA();
    this.refreshAnswers();
  }

  handleChangeAdd(e) {
    let votes = parseInt(e)
    this.setState({ input: votes + 1 });
  }

  handleChangeSubtract(e) {
    let votes = parseInt(e)
    this.setState({ input: votes - 1 });
  }

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

  addition = () => {
    // let input = document.querySelector('input')
    // let value = parseInt(this.state.input) + 1;
    // this.setState({ input: value });
    // console.log(input)
    // input.value = parseInt(input.value) + 1;
  };

  subtraction = () => {
    // let value = parseInt(this.state.input) - 1;
    // this.setState({ input: value });
    // let input = document.querySelector('input')
    // input.value = parseInt(input.value) - 1;
  };

  sortQuestions = (id) => {
    const filterQuestionsArray = this.state.response.filter(
      (question) => question.itemid == id
    );
    return (
      <div>
        {filterQuestionsArray.map((q) => (
          <div className="section">
            <div className="votes">
              <button id="add" onClick={ () => this.handleChangeAdd(this.state.input)}>
                <i className="arrow up"></i>
              </button>
              <input
                id="votes"
                type="number"
                value={this.state.input}
                // onChange={(e) => {
                //   this.handleChangeAdd(e);
                // }}
              />
              <button id="subtract" onClick={ () => this.handleChangeSubtract(this.state.input)}>
                <i className="arrow down"></i>
              </button>
            </div>
            <div className="qAndA">
              <div className="question">
                <h4>Question: </h4>
                <p id="individual">{q.question}</p>
              </div>
              <div>{this.sortAnswers(q.id)}</div>
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
