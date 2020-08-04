import React from "react";
import LowChartMock from "../src/components/RatingSummary/lowChartmock";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

afterEach(cleanup);

// basic crash test summary star chart 2 star

describe("This component test should render for 2 star mock chart without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<LowChartMock />, div);
  });
});


describe("it should show some customer ratings ", () => {
  it('contains the string "9,548 customer ratings" in an h5 element', () => {
    const wrapper = shallow(<LowChartMock />);
    const magicWords = <h5> 9,548 customer ratings</h5>;
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});


describe("it should have an a tag for 5 star ratings ", () => {
  it('containsan a tag "5 star" in the component', () => {
    const wrapper = shallow(<LowChartMock />);
    const magicWords =<a href="#">5 Star </a>;
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});