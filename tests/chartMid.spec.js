import React from "react";
import MidChartMock from "../src/components/RatingSummary/midChartmock";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

afterEach(cleanup);

// basic crash test summary star chart 3 star

describe("This component test should render for 3 star mock chart without crashing", () => {
  it("Should render as expected!", () => {
    const div = document.createElement("div");
    ReactDom.render(<MidChartMock />, div);
  });
});

describe("it should show some customer ratings ", () => {
  it('contains the string "548 customer ratings" in an h5 element', () => {
    const wrapper = shallow(<MidChartMock />);
    const magicWords = <h5> 548 customer ratings</h5>;
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});
