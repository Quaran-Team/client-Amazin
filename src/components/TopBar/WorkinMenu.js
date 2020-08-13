import React, { Component } from "react";
import "./menu.css";

export default class WorkinMenu extends Component {
  render() {
    return (
      <div className="menu">
        <a className="pickyflag">
          <div>
            <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                  <li>SHOP BY CATEGORY</li>
                  <li>Grime Video</li>
                  <li>Amazin' Music</li>

                  <li>Ocho and Alexi</li>
                  <li>Fuego Phablets</li>
                  <li>Fuego Television</li>

                  <li>Kinda E-Readerz</li>
                  <li>Audibley Bookies</li>
                  <li>AppsStore Stuffs</li>
                </ul>
              </div>
            </nav>
          </div>
        </a>
      </div>
    );
  }
}
