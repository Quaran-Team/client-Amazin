import React from "react";
import LowChartMock from "../src/components/RatingSummary/lowChartmock";
import ReactDom from 'react-dom';

// basic crash test summary star chart 2 star

describe("This component test should render for 2 star mock chart without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<LowChartMock />, div);
  });
});