import React from "react";
import MidStar from "../src/components/RatingSummary/midStar";
import ReactDom from 'react-dom';

// basic crash test 3 star

describe("This component test should render for 3 star without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<MidStar />, div);
  });
});