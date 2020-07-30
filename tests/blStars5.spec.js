import React from "react";
import HighStar from "../src/components/RatingSummary/highStar";
import ReactDom from 'react-dom';

// basic crash test 5 star

describe("This component test should render for 5 star without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<HighStar />, div);
  });
});