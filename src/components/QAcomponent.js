import React, { Component } from "react";
import QAitem from "./QAitem";
import "./qacomponent.css";

class QAcomponent extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="QAcomponent">
        <h1 id="title">Customer questions & answers</h1>
        <div className="qanda">
          <ol id="list">
              {/* pass down item id to child component */}
            <QAitem key={this.props.id} id={this.props.params} />
          </ol>
        </div>
      </div>
    );
  }
=======

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="QAcomponent">
                <h1 id="title">Customer questions & answers</h1>
                <ol>
                    <QAitem
                    key={this.props.id}
                    id={this.props.params}
                    />
                </ol>
            </div>
        )
    }
>>>>>>> 5aabebd86394bd9fe6bd7fc995fceba79fb8e709
}

export default QAcomponent;
