import GoodStar from "../src/components/RatingSummary/goodStar";
import React from "react";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


// this here is gold
afterEach(cleanup);
// it kills anything after each test so need to unmount

// basic crash test 4 star

describe("This component test should render for 4 star without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<GoodStar />, div);
  });
});

// specific checking for an a tag about ratings

describe("it should have a/an ratings a tag", () => {
  it('contains the string "26,547 ratings" in an a tag element', () => {
    const wrapper = shallow(<GoodStar />);
    const magicWords = <a  className="starLink"  href="#goodChart"> 26,547 ratings</a>;
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});