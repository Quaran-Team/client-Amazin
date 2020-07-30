import React from "react";
import BadChartMock from "../src/components/RatingSummary/badChartmock";
import ReactDom from 'react-dom';

// basic crash test summary star chart 1 star

describe("This component test should render for 1 star mock chart without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<BadChartMock />, div);
  });
});