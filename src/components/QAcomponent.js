import React, { Component } from "react";
import QAitem from "./QAitem";

class QAcomponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="QAcomponent">
        <h1 id="title">Customer questions & answers</h1>
        <ol>
          <QAitem key={this.props.id} id={this.props.params} />
        </ol>
      </div>
    );
  }
}

export default QAcomponent;
