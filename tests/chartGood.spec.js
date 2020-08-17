import React from "react";
import GoodChartMock from "../src/components/RatingSummary/goodChartmock";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

afterEach(cleanup);

// basic crash test summary star chart 4 star

describe("This component test should render for 4 star mock chart without crashing", () => {
  it("Should render as expected!", () => {
    const div = document.createElement("div");
    ReactDom.render(<GoodChartMock />, div);
  });
});

// test to see if component contains h5 ratings

describe("it should say customer ratings ", () => {
  it('contains the string "26,547 customer ratings" in an h5 element', () => {
    const wrapper = shallow(<GoodChartMock />);
    const magicWords = <h5>26,547 customer ratings</h5>;
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});
