import React from "react";
import HighChartMock from "../src/components/RatingSummary/highChartmock";
import ReactDom from 'react-dom';

// basic crash test summary star chart 5 star

describe("This component test should render for 5 star mock chart without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<HighChartMock />, div);
  });
});