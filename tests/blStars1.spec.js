import React from "react";
import BadStar from "../src/components/RatingSummary/badStar";
import ReactDom from 'react-dom';

// basic crash test 1 star

describe("This component test should render for 1 star without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<BadStar />, div);
  });
});
