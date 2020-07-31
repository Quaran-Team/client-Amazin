import React from "react";
import BadStar from "../src/components/RatingSummary/badStar";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


// this here is gold
afterEach(cleanup);
// it kills anything after each test so need to unmount

// basic crash test 1 star

describe("This component test should render for 1 star without crashing", () => {
  it("Should render as expected!", () => {
    const div=document.createElement("div"); 
    ReactDom.render(<BadStar />, div);
  });
});
// 2nd test for very specific line of code

describe("it should have a/an ratings a tag", () => {
  it('contains the string "66,847 ratings" in an a tag element', () => {
    const wrapper = shallow(<BadStar />);
    const magicWords = <a href="#badChart"> 66,847 ratings</a>;
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});