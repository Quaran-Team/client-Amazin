import React from "react";
import GoodChartMock from "../src/components/RatingSummary/goodChartmock";
import ReactDom from 'react-dom';

// basic crash test summary star chart 4 star

describe("This component test should render for 4 star mock chart without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<GoodChartMock />, div);
  });
});