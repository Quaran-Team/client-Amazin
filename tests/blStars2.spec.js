import LowStar from "../src/components/RatingSummary/lowStar";
import React from "react";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// this here is gold
afterEach(cleanup);
// it kills anything after each test so need to unmount

// basic crash test 2 star

describe("This component test should render for 2 star without crashing", () => {
  it("Should render as expected!", () => {
    const div = document.createElement("div");
    ReactDom.render(<LowStar />, div);
  });
});

/// test for a specific line in the component - questions

describe("it should have a/an ratings a tag", () => {
  it('contains the string "723 answered questions" in an a tag element', () => {
    const wrapper = shallow(<LowStar />);
    const magicWords = (
      <a className="starLink" href="#">
        {" "}
        723 answered questions
      </a>
    );
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});

/// test for a specific line in the component - ratings

describe("it should have a/an ratings a tag", () => {
  it('contains the string "4,158 ratings" in an a tag element', () => {
    const wrapper = shallow(<LowStar />);
    const magicWords = <a className="starLink" href="#lowChart"> 4,158 ratings</a>;
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});

/// test for a specific line in the component - a star (&#9733;)

describe("it should display at least one star ", () => {
  it("contains a star unicode element", () => {
    const wrapper = shallow(<LowStar />);
    const magicWords = <span className="gold">&#9733;</span>;
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});


