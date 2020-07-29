import React from "react";
import LowStar from "../src/components/RatingSummary/lowStar";
import ReactDom from 'react-dom';

// basic crash test 2 star

describe("This component test should render for 2 star without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<LowStar />, div);
  });
});