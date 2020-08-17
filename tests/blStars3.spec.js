import MidStar from "../src/components/RatingSummary/midStar";
import React from "react";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// this here is gold
afterEach(cleanup);
// it kills anything after each test so need to unmount

// basic crash test 3 star

describe("This component test should render for 3 star without crashing", () => {
  it("Should render as expected!", () => {
    const div = document.createElement("div");
    ReactDom.render(<MidStar />, div);
  });
});

// checking for an a tag about questions

describe("it should have a/an ratings a tag", () => {
  it('contains the string "72 answered questions" in an a tag element', () => {
    const wrapper = shallow(<MidStar />);
    const magicWords = (
      <a className="starLink" href="#">
        {" "}
        72 answered questions
      </a>
    );
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});

/////red hooded sweatshirt
