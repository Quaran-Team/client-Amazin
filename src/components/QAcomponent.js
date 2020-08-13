import React, { Component } from "react";
import QAitem from "./QAitem";
import "./qacomponent.css";

class QAcomponent extends Component {
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
}

export default QAcomponent;
