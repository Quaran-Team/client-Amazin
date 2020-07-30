import React from "react";
import MidChartMock from "../src/components/RatingSummary/midChartmock";
import ReactDom from 'react-dom';

// basic crash test summary star chart 3 star

describe("This component test should render for 3 star mock chart without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<MidChartMock />, div);
  });
});