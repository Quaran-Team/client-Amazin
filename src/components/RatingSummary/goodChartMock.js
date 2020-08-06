import React, { Component } from "react";
import "./chartMock.css";

export default class GoodChartMock extends Component {
  render() {
    return (
      <div className="chart" id="goodChart">
        <h4>
          {" "}
          <span className="gold">&#9733;</span>
          <span className="gold">&#9733;</span>
          <span className="gold">&#9733;</span>
          <span className="gold">&#9733;</span>
          <span className="gray">&#9733;</span> 4.1 out of 5
        </h4>
        <h5>26,547 customer ratings</h5>
        <h5>
          <a  className="chartLink" href="#">5 Star </a> <progress value="15" max="100" />{" "}
          <a className="chartLink"  href="#">15%</a>{" "}
        </h5>
        <h5>
          <a className="chartLink"  href="#">4 Star </a> <progress value="64" max="100" />{" "}
          <a className="chartLink"  href="#">64%</a>{" "}
        </h5>
        <h5>
          <a className="chartLink"  href="#">3 Star </a> <progress value="7" max="100" />{" "}
          <a className="chartLink"  className="chartLink"  href="#">7%</a>{" "}
        </h5>
        <h5>
          <a className="chartLink"  href="#">2 Star </a> <progress value="9" max="100" />{" "}
          <a className="chartLink"  href="#">9%</a>{" "}
        </h5>
        <h5>
          <a className="chartLink"  href="#">1 Star </a> <progress value="5" max="100" />{" "}
          <a  className="chartLink" href="#">5%</a>{" "}
        </h5>
        <hr></hr>
        <a className="chartLink"  href="#">See all customer reviews &gt; </a>
      </div>
    );
  }
}
