import HighStar from "../src/components/RatingSummary/highStar";
import React from "react";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// this here is gold
afterEach(cleanup);
// it kills anything after each test so need to unmount

// basic crash test 5 star

describe("This component test should render for 5 star without crashing", () => {
  it("Should render as expected!", () => {
    const div = document.createElement("div");
    ReactDom.render(<HighStar />, div);
  });
});

// specific checking for an a tag about questions

describe("it should have a/an ratings a tag", () => {
  it('contains the string "167 answered questions" in an a tag element', () => {
    const wrapper = shallow(<HighStar />);
    const magicWords = (
      <a className="starLink" href="#">
        {" "}
        167 answered questions
      </a>
    );
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});
