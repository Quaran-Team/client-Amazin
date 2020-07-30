import React from "react";
import HighChartMock from "../src/components/RatingSummary/highChartmock";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

afterEach(cleanup);

// basic crash test summary star chart 5 star

describe("This component test should render for 5 star mock chart without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<HighChartMock />, div);
  });
});


describe("it should say customer ratings ", () => {
  it('contains the string "9,548 customer ratings" in an h5 element', () => {
    const wrapper = shallow(<HighChartMock />);
    const magicWords = <h5> 9,548 customer ratings</h5>;
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});