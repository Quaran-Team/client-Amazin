import React from "react";
import GoodStar from "../src/components/RatingSummary/goodStar";
import ReactDom from 'react-dom';

// basic crash test 4 star

describe("This component test should render for 4 star without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<GoodStar />, div);
  });
});