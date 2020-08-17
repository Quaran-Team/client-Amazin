import React, { Component } from "react";
import QAndADataService from "../service/QAndADataService";
import Votes from "./Votes"
import "./qacomponent.css";

export default class QAitem extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    response: [],
    allAnswers: [],
    sortedAnswers: [],
    itemId: null,
  };

  refreshQAndA = this.refreshQAndA.bind(this);
  refreshAnswers = this.refreshAnswers.bind(this);

  componentDidMount() {
    this.refreshQAndA();
    this.refreshAnswers();
  }

  componentWillUnmount() {
    this.setState = (state,callback)=>{
        return;
    };
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

  sortQuestions = (id) => {
      //using item id, filter through questions where item id equals question.itemid
    const filterQuestionsArray = this.state.response.filter(
      (question) => question.itemid == id
    );
    return (
      <div>
          {/* map through the filtered questions */}
        {filterQuestionsArray.map((q) => (
          <div className="section">
            <Votes/>
            <div className="qAndA">
              <div className="question">
                <h4>Question: </h4>
                <p id="individual"><a href="">{q.question}</a></p>
              </div>
              {/* do the same thing with the answers */}
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
      //sort through questions by item id.
    return <div className="QAitem">{this.sortQuestions(this.props.id)}</div>;
  }
}
