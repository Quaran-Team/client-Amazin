import React from "react";
import BadChartMock from "../src/components/RatingSummary/badChartmock";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

afterEach(cleanup);

// fake test to test testing

test("Fake Test", () => {
  expect(true).toBeTruthy();
});

// basic crash test summary star chart 1 star

describe("This component test should render for 1 star mock chart without crashing", () => {
  it("Should render as expected!", () => {
    const div = document.createElement("div");
    ReactDom.render(<BadChartMock />, div);
  });
});

// test to see if component contains h5 ratings

// comment

describe("it should say customer ratings ", () => {
  it('contains the string "66,847 customer ratings" in an h5 element', () => {
    const wrapper = shallow(<BadChartMock />);
    const magicWords = <h5> 66,847 customer ratings</h5>;
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});

