import React from "react";
import Footer from "../src/components/Footer/Footer";
import BottomLine from "../src/components/Footer/BottomLine";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// this here is gold
afterEach(cleanup);
// it kills anything after each test so need to unmount

// basic crash test

describe("This component test should render the footer without crashing", () => {
  it("Should render as expected!", () => {
    const div = document.createElement("div");
    ReactDom.render(<Footer />, div);
  });
});
//  test for 3 very specific lines of code in child component

describe("it should have an a tag Conditions", () => {
  it("contains Conditions of Use in an a tag element", () => {
    const wrapper = shallow(<BottomLine />);
    const magicWords = (
      <a href="#foot" className="bottomlinks">
        Conditions of Use
      </a>
    );
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});

describe("it should have an a tag Privacy", () => {
  it("contains Privacy Notice in an a tag element", () => {
    const wrapper = shallow(<BottomLine />);
    const whatWeWant = (
      <a href="#foot" className="bottomlinks">
        Privacy Notice
      </a>
    );
    expect(wrapper.contains(whatWeWant)).toEqual(true);
  });
});

describe("it should have an a tag Interest", () => {
  it("contains Interest-Based Ads in an a tag element", () => {
    const wrapper = shallow(<BottomLine />);
    const whatWeMade = (
      <a href="#foot" className="bottomlinks">
        Interest-Based Ads
      </a>
    );
    expect(wrapper.contains(whatWeMade)).toEqual(true);
  });
});
