import React, { Component } from "react";
import "./chartMock.css";

export default class DynamicStarChart extends Component {
  render() {
    return (
      <div className="chart" id="dynamicChart">
        <h4>
          <span className="gold">&#9733;</span>
          <span className="gray">&#9733;</span>
          <span className="gray">&#9733;</span>
          <span className="gray">&#9733;</span>
          <span className="gray">&#9733;</span>
          <h3> x out of 5</h3>
        </h4>
        <h5> nn,nnn customer ratings</h5>
        <h5>
          <a className="chartLink" href="#">
            5 Star{" "}
          </a>{" "}
          <progress value="5" max="100" />{" "}
          <a className="chartLink" href="#">
            X%
          </a>{" "}
        </h5>
        <h5>
          <a className="chartLink" href="#">
            4 Star{" "}
          </a>{" "}
          <progress value="7" max="100" />{" "}
          <a className="chartLink" href="#">
            X%
          </a>{" "}
        </h5>
        <h5>
          <a className="chartLink" href="#">
            3 Star{" "}
          </a>{" "}
          <progress value="9" max="100" />{" "}
          <a className="chartLink" href="#">
            X%
          </a>{" "}
        </h5>
        <h5>
          <a className="chartLink" href="#">
            2 Star{" "}
          </a>{" "}
          <progress value="15" max="100" />{" "}
          <a className="chartLink" href="#">
            X%
          </a>{" "}
        </h5>
        <h5>
          <a className="chartLink" href="#">
            1 Star{" "}
          </a>{" "}
          <progress value="64" max="100" />{" "}
          <a className="chartLink" href="#">
            X%
          </a>{" "}
        </h5>
        <hr></hr>
        <a className="chartLink" href="#">
          See all customer reviews &gt;{" "}
        </a>
      </div>
    );
  }
}
